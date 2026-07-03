import { useState, useEffect, useCallback, useMemo } from 'react'
import { PLAN, TOTAL_PLAN_KM, STORAGE_KEY, RACE_DATE } from './planData'

function loadInitialState() {
  let state = {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) state = JSON.parse(raw)
  } catch {
    state = {}
  }
  PLAN.forEach(w => {
    w.runs.forEach(r => {
      if (!(r.id in state) && r.doneDefault) {
        state[r.id] = true
      }
    })
  })
  return state
}

function formatKm(n) {
  return n.toFixed(1).replace(/\.0$/, '')
}

function useCountdown(targetDate) {
  const [daysLeft, setDaysLeft] = useState(null)

  useEffect(() => {
    const calc = () => {
      const race = new Date(targetDate)
      const now = new Date()
      const diff = Math.ceil((race - now) / (1000 * 60 * 60 * 24))
      setDaysLeft(diff)
    }
    calc()
    const interval = setInterval(calc, 1000 * 60 * 60)
    return () => clearInterval(interval)
  }, [targetDate])

  return daysLeft
}

function WeekCard({ week, isOpen, onToggle, state, onToggleRun }) {
  const doneKm = week.runs.reduce((sum, r) => sum + (state[r.id] ? r.km : 0), 0)
  const weekClass = 'week' + (isOpen ? ' open' : '') + (week.note ? ' has-note' : '')

  return (
    <div className={weekClass}>
      <div className="week-header" onClick={onToggle}>
        <div>
          <div className="title">{week.title}</div>
          <div className="dates">{week.dates}</div>
        </div>
        <div className="right">
          <div className="kmtag">{formatKm(doneKm)} / {week.total} km</div>
          <div className="chevron">▶</div>
        </div>
      </div>

      {week.note && (
        <div className="week-note">📌 {week.note}</div>
      )}

      <div className="runs">
        {week.runs.map(run => {
          const isDone = !!state[run.id]
          const runClass = 'run-item' + (isDone ? ' done' : '')
          return (
            <div key={run.id} className={runClass}>
              <label>
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => onToggleRun(run.id)}
                />
                <span className="run-day">{run.day}</span>
                <span className="run-desc">{run.desc}</span>
                <span className="run-km">{run.km} km</span>
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function App() {
  const [state, setState] = useState(loadInitialState)
  const [openWeeks, setOpenWeeks] = useState({ w1: true })
  const daysLeft = useCountdown(RACE_DATE)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      console.error('No se pudo guardar el progreso', e)
    }
  }, [state])

  const toggleRun = useCallback((runId) => {
    setState(prev => ({ ...prev, [runId]: !prev[runId] }))
  }, [])

  const toggleWeek = useCallback((weekId) => {
    setOpenWeeks(prev => ({ ...prev, [weekId]: !prev[weekId] }))
  }, [])

  const totalDone = useMemo(
    () => PLAN.reduce((sum, w) => sum + w.runs.reduce((a, r) => a + (state[r.id] ? r.km : 0), 0), 0),
    [state]
  )

  const pct = Math.min(100, Math.round((totalDone / TOTAL_PLAN_KM) * 100))

  const resetProgress = () => {
    if (confirm('¿Seguro que quieres borrar todo tu progreso guardado?')) {
      setState({})
    }
  }

  let countdownText = '–'
  if (daysLeft !== null) {
    if (daysLeft > 0) countdownText = daysLeft + ' días'
    else if (daysLeft === 0) countdownText = '¡Hoy!'
    else countdownText = '—'
  }

  return (
    <>
      <header>
        <h1>🏃 Plan Media Maratón Lima</h1>
        <p>Sigue tu progreso semana a semana, todo se guarda automáticamente</p>
        <div className="race-badge">
          <div>
            <div className="label">Día de carrera</div>
            <div className="value">Dom 23 agosto · 21.1 km</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="label">Faltan</div>
            <div className="value">{countdownText}</div>
          </div>
        </div>
      </header>

      <div className="progress-wrap">
        <div className="progress-card">
          <div className="row">
            <div>
              <div className="big">{formatKm(totalDone)}</div>
              <div className="small">km completados de {formatKm(TOTAL_PLAN_KM)} km totales</div>
            </div>
            <div className="small">{pct}%</div>
          </div>
          <div className="bar-bg">
            <div className="bar-fill" style={{ width: pct + '%' }} />
          </div>
        </div>
      </div>

      <main>
        {PLAN.map(week => (
          <WeekCard
            key={week.id}
            week={week}
            isOpen={!!openWeeks[week.id]}
            onToggle={() => toggleWeek(week.id)}
            state={state}
            onToggleRun={toggleRun}
          />
        ))}
      </main>

      <div className="race-section">
        <div className="emoji">🏁</div>
        <h2>Media Maratón de Lima</h2>
        <p>Domingo 23 de agosto · 21.1 km</p>
      </div>

      <button className="reset-btn" onClick={resetProgress}>
        Reiniciar progreso guardado
      </button>
    </>
  )
}

import { useState, useEffect, useCallback, useMemo } from 'react'
import { PLAN, TOTAL_PLAN_KM, STORAGE_KEY, PACE_STORAGE_KEY, RACE_DATE, RACE_KM } from './planData'

const WEEKDAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

function formatRunDate(iso) {
  const d = new Date(iso + 'T00:00:00')
  return WEEKDAYS[d.getDay()] + ' ' + d.getDate() + ' ' + MONTHS[d.getMonth()]
}

function loadFromStorage(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function loadInitialState() {
  const state = loadFromStorage(STORAGE_KEY)
  PLAN.forEach(w => {
    w.runs.forEach(r => {
      if (!(r.id in state) && r.doneDefault) {
        state[r.id] = true
      }
    })
  })
  return state
}

function getCurrentWeekId(plan) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  for (const week of plan) {
    if (week.start && week.end) {
      const start = new Date(week.start)
      const end = new Date(week.end)
      if (today >= start && today <= end) return week.id
    }
  }
  if (today < new Date(plan[0].start)) return plan[0].id
  return plan[plan.length - 1].id
}

function formatKm(n) {
  return n.toFixed(1).replace(/\.0$/, '')
}

// Convierte "5:30" -> 330 segundos. Devuelve null si el formato no es valido.
function parsePace(str) {
  if (!str) return null
  const match = /^(\d{1,2}):([0-5]\d)$/.exec(str.trim())
  if (!match) return null
  const min = parseInt(match[1], 10)
  const sec = parseInt(match[2], 10)
  return min * 60 + sec
}

function formatPace(totalSeconds) {
  if (totalSeconds == null || isNaN(totalSeconds)) return '–'
  const m = Math.floor(totalSeconds / 60)
  const s = Math.round(totalSeconds % 60)
  return m + ':' + String(s).padStart(2, '0')
}

function formatDuration(totalSeconds) {
  if (totalSeconds == null || isNaN(totalSeconds)) return '–'
  const total = Math.round(totalSeconds)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return h + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0')
}

// Encuentra la carrera registrada mas larga (mejor predictora de resistencia)
function findBestPredictor(plan, paces) {
  let best = null
  plan.forEach(week => {
    week.runs.forEach(run => {
      const paceSec = parsePace(paces[run.id])
      if (paceSec == null) return
      if (!best || run.km > best.run.km ||
          (run.km === best.run.km && new Date(run.date) > new Date(best.run.date))) {
        best = { run, paceSec }
      }
    })
  })
  return best
}

// Formula de Riegel: T2 = T1 * (D2/D1)^1.06, estandar para proyectar tiempos entre distancias
function predictRaceTime(best, targetKm) {
  if (!best) return null
  const knownTimeSec = best.paceSec * best.run.km
  const targetTimeSec = knownTimeSec * Math.pow(targetKm / best.run.km, 1.06)
  const targetPaceSec = targetTimeSec / targetKm
  return { targetTimeSec, targetPaceSec }
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

function WeekCard({ week, isOpen, onToggle, state, paces, onToggleRun, onPaceChange }) {
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
                <span className="run-day">{formatRunDate(run.date)}</span>
                <span className="run-desc">{run.desc}</span>
                <span className="run-km">{run.km} km</span>
              </label>
              <input
                type="text"
                className="pace-input"
                placeholder="mm:ss"
                value={paces[run.id] || ''}
                onChange={(e) => onPaceChange(run.id, e.target.value)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function App() {
  const [state, setState] = useState(loadInitialState)
  const [paces, setPaces] = useState(() => loadFromStorage(PACE_STORAGE_KEY))
  const [openWeeks, setOpenWeeks] = useState(() => ({ [getCurrentWeekId(PLAN)]: true }))
  const daysLeft = useCountdown(RACE_DATE)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      console.error('No se pudo guardar el progreso', e)
    }
  }, [state])

  useEffect(() => {
    try {
      localStorage.setItem(PACE_STORAGE_KEY, JSON.stringify(paces))
    } catch (e) {
      console.error('No se pudo guardar el ritmo', e)
    }
  }, [paces])

  const toggleRun = useCallback((runId) => {
    setState(prev => ({ ...prev, [runId]: !prev[runId] }))
  }, [])

  const updatePace = useCallback((runId, value) => {
    setPaces(prev => ({ ...prev, [runId]: value }))
  }, [])

  const toggleWeek = useCallback((weekId) => {
    setOpenWeeks(prev => ({ ...prev, [weekId]: !prev[weekId] }))
  }, [])

  const totalDone = useMemo(
    () => PLAN.reduce((sum, w) => sum + w.runs.reduce((a, r) => a + (state[r.id] ? r.km : 0), 0), 0),
    [state]
  )

  const pct = Math.min(100, Math.round((totalDone / TOTAL_PLAN_KM) * 100))

  const bestPredictor = useMemo(() => findBestPredictor(PLAN, paces), [paces])
  const prediction = useMemo(
    () => predictRaceTime(bestPredictor, RACE_KM),
    [bestPredictor]
  )

  const resetProgress = () => {
    if (confirm('¿Seguro que quieres borrar todo tu progreso guardado (incluye los ritmos registrados)?')) {
      setState({})
      setPaces({})
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

        {prediction ? (
          <div className="prediction-card">
            <div className="prediction-title">🔮 Predicción para la Media Maratón</div>
            <div className="prediction-row">
              <span>Basado en</span>
              <span>{formatRunDate(bestPredictor.run.date)} · {bestPredictor.run.km} km a {formatPace(bestPredictor.paceSec)}/km</span>
            </div>
            <div className="prediction-main">{formatDuration(prediction.targetTimeSec)}</div>
            <div className="prediction-sub">Ritmo objetivo: {formatPace(prediction.targetPaceSec)} /km</div>
          </div>
        ) : (
          <div className="prediction-card empty">
            <div className="prediction-title">🔮 Predicción para la Media Maratón</div>
            <p>Registra el ritmo (mm:ss por km) de al menos una carrera, idealmente tu tirada larga, para ver aquí tu tiempo estimado.</p>
          </div>
        )}
      </div>

      <main>
        {PLAN.map(week => (
          <WeekCard
            key={week.id}
            week={week}
            isOpen={!!openWeeks[week.id]}
            onToggle={() => toggleWeek(week.id)}
            state={state}
            paces={paces}
            onToggleRun={toggleRun}
            onPaceChange={updatePace}
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

import { useState, useEffect, useCallback, useMemo } from 'react'
import { PLAN, TOTAL_PLAN_KM, STORAGE_KEY, PACE_STORAGE_KEY, FEEL_STORAGE_KEY } from './planData'

const WEEKDAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

function formatRunDate(iso) {
  const d = new Date(iso + 'T00:00:00')
  return WEEKDAYS[d.getDay()] + ' ' + d.getDate() + ' ' + MONTHS[d.getMonth()]
}

function formatDateShort(iso) {
  const d = new Date(iso + 'T00:00:00')
  return d.getDate() + ' ' + MONTHS[d.getMonth()]
}

function loadFromStorage(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function getCurrentWeek(plan) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  for (const week of plan) {
    const start = new Date(week.start)
    const end = new Date(week.end)
    if (today >= start && today <= end) return week
  }
  if (today < new Date(plan[0].start)) return plan[0]
  return plan[plan.length - 1]
}

function formatKm(n) {
  return n.toFixed(1).replace(/\.0$/, '')
}

function WeekCard({ week, isOpen, onToggle, state, paces, feels, onToggleRun, onPaceChange, onFeelChange }) {
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
          <div className="kmtag">{formatKm(doneKm)} / {formatKm(week.total)} km</div>
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
          const isRunningDay = run.type === 'run'
          return (
            <div key={run.id} className={runClass}>
              <label className="run-main">
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => onToggleRun(run.id)}
                />
                <span className="run-day">{formatRunDate(run.date)}</span>
                <span className="run-desc">{isRunningDay ? '🏃 ' : '🏋️ '}{run.desc}</span>
                {isRunningDay && <span className="run-km">{run.km} km</span>}
              </label>
              <div className="run-extra">
                <select
                  className="effort-select"
                  value={feels[run.id] || ''}
                  onChange={(e) => onFeelChange(run.id, e.target.value)}
                >
                  <option value="">Sensación</option>
                  <option value="bien">😊 Bien</option>
                  <option value="normal">😐 Normal</option>
                  <option value="molestia">🤕 Molestia</option>
                </select>
                {isRunningDay && (
                  <input
                    type="text"
                    className="pace-input"
                    placeholder="mm:ss"
                    value={paces[run.id] || ''}
                    onChange={(e) => onPaceChange(run.id, e.target.value)}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function App() {
  const [state, setState] = useState(() => loadFromStorage(STORAGE_KEY))
  const [paces, setPaces] = useState(() => loadFromStorage(PACE_STORAGE_KEY))
  const [feels, setFeels] = useState(() => loadFromStorage(FEEL_STORAGE_KEY))
  const currentWeek = useMemo(() => getCurrentWeek(PLAN), [])
  const [openWeeks, setOpenWeeks] = useState(() => ({ [currentWeek.id]: true }))

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) }
    catch (e) { console.error('No se pudo guardar el progreso', e) }
  }, [state])

  useEffect(() => {
    try { localStorage.setItem(PACE_STORAGE_KEY, JSON.stringify(paces)) }
    catch (e) { console.error('No se pudo guardar el ritmo', e) }
  }, [paces])

  useEffect(() => {
    try { localStorage.setItem(FEEL_STORAGE_KEY, JSON.stringify(feels)) }
    catch (e) { console.error('No se pudo guardar la sensación', e) }
  }, [feels])

  const toggleRun = useCallback((runId) => {
    setState(prev => ({ ...prev, [runId]: !prev[runId] }))
  }, [])

  const updatePace = useCallback((runId, value) => {
    setPaces(prev => ({ ...prev, [runId]: value }))
  }, [])

  const updateFeel = useCallback((runId, value) => {
    setFeels(prev => ({ ...prev, [runId]: value }))
  }, [])

  const toggleWeek = useCallback((weekId) => {
    setOpenWeeks(prev => ({ ...prev, [weekId]: !prev[weekId] }))
  }, [])

  const totalDone = useMemo(
    () => PLAN.reduce((sum, w) => sum + w.runs.reduce((a, r) => a + (state[r.id] ? r.km : 0), 0), 0),
    [state]
  )

  const pct = TOTAL_PLAN_KM > 0 ? Math.min(100, Math.round((totalDone / TOTAL_PLAN_KM) * 100)) : 0

  const anyMolestia = useMemo(
    () => Object.values(feels).some(f => f === 'molestia'),
    [feels]
  )

  const resetProgress = () => {
    if (confirm('¿Seguro que quieres borrar todo tu progreso guardado?')) {
      setState({})
      setPaces({})
      setFeels({})
    }
  }

  const planEnd = PLAN[PLAN.length - 1].end

  return (
    <>
      <header>
        <h1>⚡ Reinicio + Velocidad</h1>
        <p>6 semanas: vuelta a correr, fuerza progresiva y primeros trabajos de velocidad</p>
        <div className="race-badge">
          <div>
            <div className="label">Semana actual</div>
            <div className="value">{currentWeek.title}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="label">Plan termina</div>
            <div className="value">{formatDateShort(planEnd)}</div>
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

        {anyMolestia && (
          <div className="prediction-card">
            <div className="prediction-warning" style={{ marginTop: 0 }}>
              🤕 Registraste al menos una sesión con molestia. Antes de seguir subiendo carga, vale la pena confirmar con tu especialista que todo está bien.
            </div>
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
            feels={feels}
            onToggleRun={toggleRun}
            onPaceChange={updatePace}
            onFeelChange={updateFeel}
          />
        ))}
      </main>

      <button className="reset-btn" onClick={resetProgress}>
        Reiniciar progreso guardado
      </button>
    </>
  )
}

export const PLAN = [
  {
    id: 'w1', title: 'Semana 1', dates: '30 jun - 6 jul', total: 36,
    start: '2026-06-30', end: '2026-07-06',
    runs: [
      { id: 'w1-dom29', date: '2026-06-29', desc: 'Rodaje suave', km: 7, doneDefault: true },
      { id: 'w1-lun30', date: '2026-06-30', desc: 'Rodaje suave', km: 7, doneDefault: true },
      { id: 'w1-mie1', date: '2026-07-01', desc: '6 km suaves', km: 6 },
      { id: 'w1-vie3', date: '2026-07-03', desc: '6 km suaves', km: 6 },
      { id: 'w1-dom5', date: '2026-07-05', desc: '10 km suaves', km: 10 },
    ]
  },
  {
    id: 'w2', title: 'Semana 2', dates: '7 - 13 jul', total: 31,
    start: '2026-07-07', end: '2026-07-13',
    runs: [
      { id: 'w2-mar', date: '2026-07-07', desc: 'Rodaje', km: 6 },
      { id: 'w2-jue', date: '2026-07-09', desc: 'Rodaje', km: 7 },
      { id: 'w2-sab', date: '2026-07-11', desc: 'Rodaje', km: 6 },
      { id: 'w2-dom', date: '2026-07-12', desc: 'Tirada larga', km: 12 },
    ]
  },
  {
    id: 'w3', title: 'Semana 3', dates: '14 - 20 jul', total: 34,
    start: '2026-07-14', end: '2026-07-20',
    runs: [
      { id: 'w3-mar', date: '2026-07-14', desc: 'Rodaje', km: 7 },
      { id: 'w3-jue', date: '2026-07-16', desc: 'Rodaje', km: 7 },
      { id: 'w3-sab', date: '2026-07-18', desc: 'Rodaje', km: 6 },
      { id: 'w3-dom', date: '2026-07-19', desc: 'Tirada larga', km: 14 },
    ]
  },
  {
    id: 'w4', title: 'Semana 4', dates: '21 - 27 jul', total: 35,
    start: '2026-07-21', end: '2026-07-27',
    note: 'Semana de Punta Cana. Si un día se complica, elimina un rodaje corto, no la tirada larga.',
    runs: [
      { id: 'w4-mar', date: '2026-07-21', desc: 'Rodaje', km: 7 },
      { id: 'w4-jue', date: '2026-07-23', desc: 'Rodaje', km: 8 },
      { id: 'w4-sab', date: '2026-07-25', desc: 'Rodaje', km: 5 },
      { id: 'w4-dom', date: '2026-07-26', desc: 'Tirada larga', km: 15 },
    ]
  },
  {
    id: 'w5', title: 'Semana 5', dates: '28 jul - 3 ago', total: 38,
    start: '2026-07-28', end: '2026-08-03',
    runs: [
      { id: 'w5-mar', date: '2026-07-28', desc: 'Rodaje', km: 8 },
      { id: 'w5-jue', date: '2026-07-30', desc: 'Rodaje', km: 8 },
      { id: 'w5-sab', date: '2026-08-01', desc: 'Rodaje', km: 6 },
      { id: 'w5-dom', date: '2026-08-02', desc: 'Tirada larga', km: 16 },
    ]
  },
  {
    id: 'w6', title: 'Semana 6 · Pico', dates: '4 - 10 ago', total: 40,
    start: '2026-08-04', end: '2026-08-10',
    note: 'Semana pico. Si el pie molesta más de lo habitual, cambia el fondo de 18 km por 16 km.',
    runs: [
      { id: 'w6-mar', date: '2026-08-04', desc: 'Rodaje', km: 8 },
      { id: 'w6-jue', date: '2026-08-06', desc: 'Rodaje', km: 8 },
      { id: 'w6-sab', date: '2026-08-08', desc: 'Rodaje', km: 6 },
      { id: 'w6-dom', date: '2026-08-09', desc: 'Tirada larga (18 km, o 16 si el pie molesta)', km: 18 },
    ]
  },
  {
    id: 'w7', title: 'Semana 7 · Descarga', dates: '11 - 17 ago', total: 27,
    start: '2026-08-11', end: '2026-08-17',
    note: 'Comenzar descarga.',
    runs: [
      { id: 'w7-mar', date: '2026-08-11', desc: 'Rodaje', km: 7 },
      { id: 'w7-jue', date: '2026-08-13', desc: 'Rodaje', km: 6 },
      { id: 'w7-dom', date: '2026-08-16', desc: 'Rodaje', km: 14 },
    ]
  },
  {
    id: 'w8', title: 'Semana de carrera', dates: '18 - 23 ago', total: 9,
    start: '2026-08-18', end: '2026-08-23',
    note: 'Viernes y sábado: descanso, hidratación normal, dormir bien.',
    runs: [
      { id: 'w8-mar18', date: '2026-08-18', desc: '5 km muy suaves', km: 5 },
      { id: 'w8-jue20', date: '2026-08-20', desc: '4 km muy suaves', km: 4 },
      { id: 'w8-dom23', date: '2026-08-23', desc: '🏁 Media Maratón — 21.1 km', km: 21.1 },
    ]
  },
]

export const TOTAL_PLAN_KM = PLAN.reduce(
  (s, w) => s + w.runs.reduce((a, r) => a + r.km, 0), 0
)

export const STORAGE_KEY = 'run-progress-v1'
export const PACE_STORAGE_KEY = 'run-pace-v1'
export const RACE_DATE = '2026-08-23T08:00:00'
export const RACE_KM = 21.1

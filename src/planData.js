export const PLAN = [
  {
    id: 'w1', title: 'Semana 1 · Reposo', dates: '24 - 30 ago', total: 0,
    start: '2026-08-24', end: '2026-08-30',
    note: 'Nada de trote esta semana. Si hay dolor agudo o hinchazón que no mejora, consulta a tu especialista antes de seguir.',
    runs: [
      { id: 'w1-lun24', date: '2026-08-24', desc: 'Reposo total', km: 0 },
      { id: 'w1-mie26', date: '2026-08-26', desc: 'Caminata suave 20 min + movilidad de tobillo', km: 0 },
      { id: 'w1-vie28', date: '2026-08-28', desc: 'Fuerza habitual + caminata corta', km: 0 },
      { id: 'w1-dom30', date: '2026-08-30', desc: 'Caminata 30 min — evalúa cómo sientes el pie', km: 0 },
    ]
  },
  {
    id: 'w2', title: 'Semana 2 · Movilidad', dates: '31 ago - 6 sep', total: 0,
    start: '2026-08-31', end: '2026-09-06',
    note: 'Sigue sin trotar. Si tu especialista dio el visto bueno, puedes sumar ejercicios excéntricos de pantorrilla.',
    runs: [
      { id: 'w2-lun31', date: '2026-08-31', desc: 'Caminata 30-40 min', km: 0 },
      { id: 'w2-mie2', date: '2026-09-02', desc: 'Movilidad + activación de cadera y glúteo', km: 0 },
      { id: 'w2-vie4', date: '2026-09-04', desc: 'Fuerza habitual', km: 0 },
      { id: 'w2-dom6', date: '2026-09-06', desc: 'Caminata 40 min', km: 0 },
    ]
  },
  {
    id: 'w3', title: 'Semana 3 · Primeros trotes', dates: '7 - 13 sep', total: 6.5,
    start: '2026-09-07', end: '2026-09-13',
    note: 'Superficie blanda si puedes (pista o grass). Detente ante cualquier molestia distinta al cansancio normal.',
    runs: [
      { id: 'w3-mar8', date: '2026-09-08', desc: 'Run-walk: 1 min trote / 2 min caminata x6', km: 2 },
      { id: 'w3-jue10', date: '2026-09-10', desc: 'Run-walk: 1 min trote / 2 min caminata x6', km: 2 },
      { id: 'w3-sab12', date: '2026-09-12', desc: 'Run-walk: 1 min trote / 2 min caminata x8', km: 2.5 },
    ]
  },
  {
    id: 'w4', title: 'Semana 4 · Más trote', dates: '14 - 20 sep', total: 10,
    start: '2026-09-14', end: '2026-09-20',
    runs: [
      { id: 'w4-mar15', date: '2026-09-15', desc: 'Run-walk: 2 min trote / 1 min caminata x6', km: 3 },
      { id: 'w4-jue17', date: '2026-09-17', desc: 'Run-walk: 2 min trote / 1 min caminata x6', km: 3 },
      { id: 'w4-sab19', date: '2026-09-19', desc: 'Run-walk: 2 min trote / 1 min caminata x8', km: 4 },
    ]
  },
  {
    id: 'w5', title: 'Semana 5 · Trote continuo', dates: '21 - 27 sep', total: 8.5,
    start: '2026-09-21', end: '2026-09-27',
    note: 'Primer trote sin cortes. Ritmo cómodo, sin buscar marca.',
    runs: [
      { id: 'w5-mar22', date: '2026-09-22', desc: 'Trote continuo suave 15 min', km: 2.5 },
      { id: 'w5-jue24', date: '2026-09-24', desc: 'Trote continuo suave 15 min', km: 2.5 },
      { id: 'w5-sab26', date: '2026-09-26', desc: 'Trote continuo suave 20 min', km: 3.5 },
    ]
  },
  {
    id: 'w6', title: 'Semana 6 · Consolidando', dates: '28 sep - 4 oct', total: 11.5,
    start: '2026-09-28', end: '2026-10-04',
    runs: [
      { id: 'w6-mar29', date: '2026-09-29', desc: 'Rodaje suave 20 min', km: 3.5 },
      { id: 'w6-jue1', date: '2026-10-01', desc: 'Rodaje suave 25 min', km: 4 },
      { id: 'w6-sab3', date: '2026-10-03', desc: 'Rodaje suave 25 min', km: 4 },
    ]
  },
  {
    id: 'w7', title: 'Semana 7 · Volumen normal', dates: '5 - 11 oct', total: 17,
    start: '2026-10-05', end: '2026-10-11',
    note: 'Si algo se siente raro, prioriza bajar el tiempo antes que forzar el ritmo.',
    runs: [
      { id: 'w7-mar6', date: '2026-10-06', desc: 'Rodaje suave 30 min', km: 5 },
      { id: 'w7-jue8', date: '2026-10-08', desc: 'Rodaje suave 30 min', km: 5 },
      { id: 'w7-sab10', date: '2026-10-10', desc: 'Rodaje un poco más largo, 40 min si no hay molestias', km: 7 },
    ]
  },
  {
    id: 'w8', title: 'Semana 8 · Evaluación final', dates: '12 - 18 oct', total: 17,
    start: '2026-10-12', end: '2026-10-18',
    note: 'Si llegaste sin molestias, ya puedes iniciar un bloque enfocado en mejorar ritmo.',
    runs: [
      { id: 'w8-mar13', date: '2026-10-13', desc: 'Rodaje 30 min', km: 5 },
      { id: 'w8-jue15', date: '2026-10-15', desc: 'Rodaje 30 min, terreno variado si se siente bien', km: 5 },
      { id: 'w8-dom18', date: '2026-10-18', desc: 'Rodaje de cierre 40 min + evaluación general', km: 7 },
    ]
  },
]

export const TOTAL_PLAN_KM = PLAN.reduce(
  (s, w) => s + w.runs.reduce((a, r) => a + r.km, 0), 0
)

export const STORAGE_KEY = 'reactivacion-progress-v1'
export const PACE_STORAGE_KEY = 'reactivacion-pace-v1'
export const FEEL_STORAGE_KEY = 'reactivacion-sensacion-v1'

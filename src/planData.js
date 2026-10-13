export const PLAN_TITLE = '🎯 Plan Cierre de Año'
export const PLAN_SUBTITLE = '12 semanas: más ritmo, cuidando el pie'

export const PLAN_GOAL = {
  title: '🎯 Meta del año',
  text: 'Bajar tu ritmo en 5K entre el test 1 (sáb 31 oct) y el test 2 (sáb 19 dic). Referencia orientativa: entre 3 % y 5 % (unos 10-15 s/km); se afina con el resultado de tu primer test.',
  baseLabel: '31 oct',
  finalLabel: '19 dic',
}

export const TEST_IDS = { base: 'w3-sab31', final: 'w10-sab19' }

const run = (id, date, desc, km) => ({ id, date, type: 'run', desc, km })
const fuerza = (id, date, desc) => ({ id, date, type: 'strength', desc, km: 0 })

const F_BASE = 'Fuerza (tu rutina, después de correr): 5 rounds de 20 planchas + 20 swings con kettlebell (100 + 100) · ~30 min'
const F_CALF = F_BASE + ' · Al final: 2 x 12 elevaciones de talón a 1 pierna, por lado (si molesta el pie, omítelo)'
const F_PROG = F_CALF + ' · Si las 5 rondas salen con técnica limpia y esfuerzo de 6/10 o menos, sube un escalón de peso en los swings; si no, mantén el mismo'
const F_DESCARGA = 'Fuerza de descarga: 3 rounds de 20 planchas + 20 swings con kettlebell'
const F_PRETEST = 'Fuerza ligera (mañana es el test): 2 rounds de 20 planchas + 20 swings con peso ligero'
const F_AFINACION = 'Fuerza reducida (semana del test): 4 rounds de 20 planchas + 20 swings con kettlebell'

const RAW_PLAN = [
  {
    id: 'w1', title: 'Semana 1 · Retomar', dates: '12 - 18 oct',
    start: '2026-10-12', end: '2026-10-18',
    note: 'Todo a ritmo cómodo (de conversación). Los strides son aceleraciones suaves de 15-20 s, sin sprint, con recuperación completa entre cada una.',
    runs: [
      run('w1-mie14', '2026-10-14', 'Rodaje suave 7 km', 7),
      fuerza('w1-mie14-f', '2026-10-14', F_BASE),
      run('w1-vie16', '2026-10-16', 'Rodaje suave 7 km + 4 strides al final', 7),
      fuerza('w1-vie16-f', '2026-10-16', F_BASE),
      run('w1-sab17', '2026-10-17', 'Rodaje largo suave 10 km (puedes pasarlo al domingo)', 10),
    ],
  },
  {
    id: 'w2', title: 'Semana 2 · Base', dates: '19 - 25 oct',
    start: '2026-10-19', end: '2026-10-25',
    note: 'Mismo volumen, más constancia. Todavía sin velocidad fuerte.',
    runs: [
      run('w2-mie21', '2026-10-21', 'Rodaje suave 8 km', 8),
      fuerza('w2-mie21-f', '2026-10-21', F_BASE),
      run('w2-vie23', '2026-10-23', 'Rodaje suave 7 km + 4 strides al final', 7),
      fuerza('w2-vie23-f', '2026-10-23', F_BASE),
      run('w2-sab24', '2026-10-24', 'Rodaje largo suave 10 km', 10),
    ],
  },
  {
    id: 'w3', title: 'Semana 3 · Test 1 (5K)', dates: '26 oct - 1 nov',
    start: '2026-10-26', end: '2026-11-01',
    note: 'Test de referencia. Corre los 5 km parejos: no arranques demasiado fuerte. Si el pie molesta o amaneces cansado, pospón el test una semana.',
    runs: [
      run('w3-mie28', '2026-10-28', 'Rodaje suave 7 km + 4 strides al final', 7),
      fuerza('w3-mie28-f', '2026-10-28', F_BASE),
      run('w3-vie30', '2026-10-30', 'Rodaje muy suave 6 km (mañana es el test)', 6),
      fuerza('w3-vie30-f', '2026-10-30', F_PRETEST),
      run('w3-sab31', '2026-10-31', 'TEST 1 · 5K: 2 km suaves de calentamiento + 5 km al ritmo más rápido que puedas sostener parejo + 2 km suaves. En el cuadro de ritmo anota SOLO el ritmo de los 5 km (del km 3 al 7)', 9),
    ],
  },
  {
    id: 'w4', title: 'Semana 4 · Fartlek', dates: '2 - 8 nov',
    start: '2026-11-02', end: '2026-11-08',
    note: 'Primera semana con velocidad. Esfuerzo fuerte pero controlado (7/10), nunca al límite. Si el pie molesta, cambia el fartlek por un rodaje suave.',
    runs: [
      run('w4-mie4', '2026-11-04', 'Fartlek: 2 km suaves + 6 x (1 min rápido / 2 min trote suave) + trote suave hasta completar 8 km', 8),
      fuerza('w4-mie4-f', '2026-11-04', F_CALF),
      run('w4-vie6', '2026-11-06', 'Rodaje suave 7 km', 7),
      fuerza('w4-vie6-f', '2026-11-06', F_CALF),
      run('w4-sab7', '2026-11-07', 'Rodaje largo suave 11 km', 11),
    ],
  },
  {
    id: 'w5', title: 'Semana 5 · Intervalos cortos', dates: '9 - 15 nov',
    start: '2026-11-09', end: '2026-11-15',
    note: 'Ritmo de intervalos = tu ritmo de 5K del test 1. Las primeras repeticiones un poco más lentas: todas deben salir parejas. Distancias totales aproximadas.',
    runs: [
      run('w5-mie11', '2026-11-11', 'Intervalos: 2 km suaves + 6 x 400 m a ritmo de 5K (trote de 200 m entre repeticiones) + 2 km suaves', 8),
      fuerza('w5-mie11-f', '2026-11-11', F_PROG),
      run('w5-vie13', '2026-11-13', 'Rodaje suave 7 km + 4 strides al final', 7),
      fuerza('w5-vie13-f', '2026-11-13', F_PROG),
      run('w5-sab14', '2026-11-14', 'Rodaje largo suave 12 km', 12),
    ],
  },
  {
    id: 'w6', title: 'Semana 6 · Intervalos largos', dates: '16 - 22 nov',
    start: '2026-11-16', end: '2026-11-22',
    note: 'Mismas reglas: repeticiones parejas. La última debe salir igual que la primera.',
    runs: [
      run('w6-mie18', '2026-11-18', 'Intervalos: 2 km suaves + 4 x 800 m a ritmo de 5K (trote de 400 m entre repeticiones) + 1,5 km suaves', 8),
      fuerza('w6-mie18-f', '2026-11-18', F_PROG),
      run('w6-vie20', '2026-11-20', 'Rodaje suave 7 km', 7),
      fuerza('w6-vie20-f', '2026-11-20', F_PROG),
      run('w6-sab21', '2026-11-21', 'Rodaje largo suave 12 km', 12),
    ],
  },
  {
    id: 'w7', title: 'Semana 7 · Tempo', dates: '23 - 29 nov',
    start: '2026-11-23', end: '2026-11-29',
    note: 'El tempo es "cómodamente duro": ritmo sostenible, algo más lento que tu ritmo de 5K (como referencia, 15-20 s/km). Ajusta por sensación.',
    runs: [
      run('w7-mie25', '2026-11-25', 'Tempo: 2 km suaves + 4 km a ritmo cómodamente duro + 2 km suaves', 8),
      fuerza('w7-mie25-f', '2026-11-25', F_CALF),
      run('w7-vie27', '2026-11-27', 'Rodaje suave 7 km + 4 strides al final', 7),
      fuerza('w7-vie27-f', '2026-11-27', F_CALF),
      run('w7-sab28', '2026-11-28', 'Rodaje largo suave 12 km', 12),
    ],
  },
  {
    id: 'w8', title: 'Semana 8 · Descarga', dates: '30 nov - 6 dic',
    start: '2026-11-30', end: '2026-12-06',
    note: 'Menos carga para asimilar las semanas de calidad. No es semana para recuperar kilómetros perdidos.',
    runs: [
      run('w8-mie2', '2026-12-02', 'Rodaje suave 7 km + 4 strides al final', 7),
      fuerza('w8-mie2-f', '2026-12-02', F_DESCARGA),
      run('w8-vie4', '2026-12-04', 'Rodaje suave 6 km', 6),
      fuerza('w8-vie4-f', '2026-12-04', F_DESCARGA),
      run('w8-sab5', '2026-12-05', 'Rodaje largo suave 10 km', 10),
    ],
  },
  {
    id: 'w9', title: 'Semana 9 · Pico de calidad', dates: '7 - 13 dic',
    start: '2026-12-07', end: '2026-12-13',
    note: 'Última semana fuerte de calidad. Después viene la afinación.',
    runs: [
      run('w9-mie9', '2026-12-09', 'Intervalos: 2 km suaves + 5 x 800 m a ritmo de 5K (trote de 400 m entre repeticiones) + 1,5 km suaves', 9),
      fuerza('w9-mie9-f', '2026-12-09', F_CALF),
      run('w9-vie11', '2026-12-11', 'Rodaje suave 7 km', 7),
      fuerza('w9-vie11-f', '2026-12-11', F_CALF),
      run('w9-sab12', '2026-12-12', 'Rodaje largo suave 11 km', 11),
    ],
  },
  {
    id: 'w10', title: 'Semana 10 · Afinación + Test 2', dates: '14 - 20 dic',
    start: '2026-12-14', end: '2026-12-20',
    note: 'Llega fresco al test del sábado. Misma ruta, mismo horario y mismas zapatillas que el test 1, si es posible.',
    runs: [
      run('w10-mie16', '2026-12-16', 'Afinación: 2 km suaves + 4 x 400 m a ritmo de 5K (trote de 200 m entre repeticiones) + 2 km suaves', 6.5),
      fuerza('w10-mie16-f', '2026-12-16', F_AFINACION),
      run('w10-vie18', '2026-12-18', 'Rodaje muy suave 5 km (mañana es el test)', 5),
      fuerza('w10-vie18-f', '2026-12-18', F_PRETEST),
      run('w10-sab19', '2026-12-19', 'TEST 2 · 5K: 2 km suaves de calentamiento + 5 km al ritmo más rápido que puedas sostener parejo + 2 km suaves. En el cuadro de ritmo anota SOLO el ritmo de los 5 km (del km 3 al 7)', 9),
    ],
  },
  {
    id: 'w11', title: 'Semana 11 · Recuperación', dates: '21 - 27 dic',
    start: '2026-12-21', end: '2026-12-27',
    note: 'Semana de Navidad: todo suave y flexible. Si un día se complica, sáltalo.',
    runs: [
      run('w11-mie23', '2026-12-23', 'Rodaje suave 7 km', 7),
      fuerza('w11-mie23-f', '2026-12-23', F_BASE),
      run('w11-vie25', '2026-12-25', 'Rodaje suave 6 km (es Navidad: si el día se complica, sáltalo)', 6),
      fuerza('w11-vie25-f', '2026-12-25', F_DESCARGA),
      run('w11-sab26', '2026-12-26', 'Rodaje largo suave 10 km', 10),
    ],
  },
  {
    id: 'w12', title: 'Semana 12 · Cierre de año', dates: '28 - 31 dic',
    start: '2026-12-28', end: '2026-12-31',
    note: 'Un rodaje para disfrutar. Revisa tu mejora en la tarjeta de meta.',
    runs: [
      run('w12-mie30', '2026-12-30', 'Rodaje de cierre del año: 8 km suaves, sin mirar el ritmo', 8),
      fuerza('w12-mie30-f', '2026-12-30', F_BASE),
    ],
  },
]

export const PLAN = RAW_PLAN.map(w => ({
  ...w,
  total: w.runs.reduce((s, r) => s + r.km, 0),
}))

export const TOTAL_PLAN_KM = PLAN.reduce((s, w) => s + w.total, 0)

export const STORAGE_KEY = 'cierre2026-progress-v1'
export const PACE_STORAGE_KEY = 'cierre2026-pace-v1'
export const FEEL_STORAGE_KEY = 'cierre2026-sensacion-v1'

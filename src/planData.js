export const PLAN = [
  {
    id: 'w1', title: 'Semana 1 · Reinicio suave', dates: '24 - 30 ago', total: 10,
    start: '2026-08-24', end: '2026-08-30',
    note: 'Vuelves a correr esta semana. Ritmo cómodo, sin buscar marca todavía.',
    runs: [
      { id: 'w1-mar25', date: '2026-08-25', type: 'run', desc: 'Rodaje suave', km: 3 },
      { id: 'w1-mie26', date: '2026-08-26', type: 'strength', desc: 'Fuerza base (peso corporal): Puente de glúteo 3x15 · Plancha 3x30s · Sentadilla 3x12 · Elevación de talones 3x15/pierna · Clamshell con liga 3x15/lado', km: 0 },
      { id: 'w1-jue27', date: '2026-08-27', type: 'run', desc: 'Rodaje suave', km: 3 },
      { id: 'w1-vie28', date: '2026-08-28', type: 'strength', desc: 'Fuerza base (peso corporal): Puente de glúteo 3x15 · Plancha 3x30s · Sentadilla 3x12 · Elevación de talones 3x15/pierna · Clamshell con liga 3x15/lado', km: 0 },
      { id: 'w1-sab29', date: '2026-08-29', type: 'run', desc: 'Rodaje suave', km: 4 },
    ]
  },
  {
    id: 'w2', title: 'Semana 2 · Subiendo volumen', dates: '31 ago - 6 sep', total: 15,
    start: '2026-08-31', end: '2026-09-06',
    runs: [
      { id: 'w2-mar1', date: '2026-09-01', type: 'run', desc: 'Rodaje suave', km: 5 },
      { id: 'w2-mie2', date: '2026-09-02', type: 'strength', desc: 'Fuerza base+ (peso corporal/liga): Zancada 3x10/pierna · Puente de glúteo a 1 pierna 3x10/lado · Elevación de talones a 1 pierna 3x12/lado · Paso lateral con liga 3x10 pasos/lado · Plancha lateral 3x20s/lado', km: 0 },
      { id: 'w2-jue3', date: '2026-09-03', type: 'run', desc: 'Rodaje suave', km: 5 },
      { id: 'w2-vie4', date: '2026-09-04', type: 'strength', desc: 'Fuerza base+ (peso corporal/liga): Zancada 3x10/pierna · Puente de glúteo a 1 pierna 3x10/lado · Elevación de talones a 1 pierna 3x12/lado · Paso lateral con liga 3x10 pasos/lado · Plancha lateral 3x20s/lado', km: 0 },
      { id: 'w2-sab5', date: '2026-09-05', type: 'run', desc: 'Rodaje suave', km: 5 },
    ]
  },
  {
    id: 'w3', title: 'Semana 3 · Primera velocidad', dates: '7 - 13 sep', total: 18,
    start: '2026-09-07', end: '2026-09-13',
    note: 'Primeras progresiones cortas. Detente si sientes algo raro en el pie.',
    runs: [
      { id: 'w3-mar8', date: '2026-09-08', type: 'run', desc: 'Rodaje suave', km: 6 },
      { id: 'w3-mie9', date: '2026-09-09', type: 'strength', desc: 'Fuerza con kettlebell ligera: Goblet squat 3x10 · Peso muerto rumano a 1 pierna (KB) 3x8/lado · Swing de KB ligero 3x12 · Plancha con toque de hombro 3x10/lado', km: 0 },
      { id: 'w3-jue10', date: '2026-09-10', type: 'run', desc: 'Rodaje suave', km: 6 },
      { id: 'w3-vie11', date: '2026-09-11', type: 'strength', desc: 'Fuerza con kettlebell ligera: Goblet squat 3x10 · Peso muerto rumano a 1 pierna (KB) 3x8/lado · Swing de KB ligero 3x12 · Plancha con toque de hombro 3x10/lado', km: 0 },
      { id: 'w3-sab12', date: '2026-09-12', type: 'run', desc: 'Rodaje 6 km + 4-6 progresiones (strides) de 15-20s al final, recuperación completa entre cada una', km: 6 },
    ]
  },
  {
    id: 'w4', title: 'Semana 4 · Fartlek', dates: '14 - 20 sep', total: 21,
    start: '2026-09-14', end: '2026-09-20',
    runs: [
      { id: 'w4-mar15', date: '2026-09-15', type: 'run', desc: 'Rodaje suave', km: 7 },
      { id: 'w4-mie16', date: '2026-09-16', type: 'strength', desc: 'Fuerza con kettlebell moderada: Goblet squat (+peso) 3x12 · Zancada búlgara 3x8/lado · Swing de KB 3x15 · Elevación de talones con KB en mano 3x15', km: 0 },
      { id: 'w4-jue17', date: '2026-09-17', type: 'run', desc: 'Rodaje suave', km: 7 },
      { id: 'w4-vie18', date: '2026-09-18', type: 'strength', desc: 'Fuerza con kettlebell moderada: Goblet squat (+peso) 3x12 · Zancada búlgara 3x8/lado · Swing de KB 3x15 · Elevación de talones con KB en mano 3x15', km: 0 },
      { id: 'w4-sab19', date: '2026-09-19', type: 'run', desc: 'Fartlek suave: 6 x 1 min más rápido / 2 min trote suave, dentro de un rodaje de 7 km', km: 7 },
    ]
  },
  {
    id: 'w5', title: 'Semana 5 · Intervalos cortos', dates: '21 - 27 sep', total: 20,
    start: '2026-09-21', end: '2026-09-27',
    runs: [
      { id: 'w5-mar22', date: '2026-09-22', type: 'run', desc: 'Rodaje suave', km: 7 },
      { id: 'w5-mie23', date: '2026-09-23', type: 'strength', desc: 'Fuerza con kettlebell moderada-alta: Peso muerto rumano a 1 pierna (+peso) 3x8/lado · Sentadilla búlgara con KB 3x10/lado · Swing de KB (+peso) 3x15 · Skipping suave 3x30s (solo si el pie está 100% cómodo)', km: 0 },
      { id: 'w5-jue24', date: '2026-09-24', type: 'run', desc: 'Rodaje suave', km: 7 },
      { id: 'w5-vie25', date: '2026-09-25', type: 'strength', desc: 'Fuerza con kettlebell moderada-alta: Peso muerto rumano a 1 pierna (+peso) 3x8/lado · Sentadilla búlgara con KB 3x10/lado · Swing de KB (+peso) 3x15 · Skipping suave 3x30s (solo si el pie está 100% cómodo)', km: 0 },
      { id: 'w5-sab26', date: '2026-09-26', type: 'run', desc: 'Intervalos: 6 x 400 m a ritmo moderado-fuerte, con 2 min trote de recuperación', km: 6 },
    ]
  },
  {
    id: 'w6', title: 'Semana 6 · Consolidando velocidad', dates: '28 sep - 4 oct', total: 23,
    start: '2026-09-28', end: '2026-10-04',
    note: 'Última semana de este bloque. Si todo fue bien, ya puedes pasar a un entrenamiento de ritmo/velocidad normal.',
    runs: [
      { id: 'w6-mar29', date: '2026-09-29', type: 'run', desc: 'Rodaje suave', km: 8 },
      { id: 'w6-mie30', date: '2026-09-30', type: 'strength', desc: 'Fuerza — mantén la carga de la semana 5, suma 1 serie extra si te sientes bien', km: 0 },
      { id: 'w6-jue1', date: '2026-10-01', type: 'run', desc: 'Rodaje suave', km: 8 },
      { id: 'w6-vie2', date: '2026-10-02', type: 'strength', desc: 'Fuerza — mantén la carga de la semana 5, suma 1 serie extra si te sientes bien', km: 0 },
      { id: 'w6-sab3', date: '2026-10-03', type: 'run', desc: 'Intervalos: 5 x 600 m a ritmo moderado-fuerte, con 2-3 min trote de recuperación', km: 7 },
    ]
  },
]

export const TOTAL_PLAN_KM = PLAN.reduce(
  (s, w) => s + w.runs.reduce((a, r) => a + r.km, 0), 0
)

export const STORAGE_KEY = 'reactivacion-progress-v1'
export const PACE_STORAGE_KEY = 'reactivacion-pace-v1'
export const FEEL_STORAGE_KEY = 'reactivacion-sensacion-v1'

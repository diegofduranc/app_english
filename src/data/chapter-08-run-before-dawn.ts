import { Capitulo } from './types'

export const chapter08: Capitulo = {
  id: 8,
  titulo: 'Run Before Dawn',
  genero: 'thriller',
  nivel: 'intermediate',
  icono: '🏃',
  lectura: {
    texto:
      "At dawn, sirens wake Noah. The streets are empty and dangerous.\n\nA message on his phone says: 'Run now.' He does not ask why.\n\nBefore the sun rises, Noah must escape the city.",
    palabrasClave: [
      { palabra: 'sirens', traduccion: 'sirenas' },
      { palabra: 'message', traduccion: 'mensaje' },
      { palabra: 'run', traduccion: 'correr' },
      { palabra: 'dawn', traduccion: 'amanecer' },
      { palabra: 'escape', traduccion: 'escapar' }
    ]
  },
  escucha: {
    quiz: [
      { pregunta: 'What wakes Noah?', opciones: ['Alarm', 'Sirens', 'Phone'], correcta: 1 },
      { pregunta: 'What does the message say?', opciones: ['Hide', 'Run', 'Wait'], correcta: 1 },
      { pregunta: 'When must he escape?', opciones: ['At night', 'Before dawn', 'Tomorrow'], correcta: 1 }
    ]
  },
  escritura: {
    ejercicios: [
      { oracion: 'Sirens wake Noah at ___.', respuesta: 'dawn' },
      { oracion: 'A ___ appears on his phone.', respuesta: 'message' },
      { oracion: 'He must ___.', respuesta: 'run' },
      { oracion: 'The streets are ___.', respuesta: 'empty' },
      { oracion: 'He must ___ the city.', respuesta: 'escape' }
    ]
  },
  practica: {
    tipo: 'match',
    pares: [
      { ingles: 'run', esp: 'correr' },
      { ingles: 'escape', esp: 'escapar' },
      { ingles: 'dawn', esp: 'amanecer' },
      { ingles: 'sirens', esp: 'sirenas' }
    ]
  },
  listaVocabulario: [
    { word: 'sirens', traduccion: 'sirenas', definicion: 'Loud warning sounds.', ejemplo: 'Sirens fill the air.' },
    { word: 'escape', traduccion: 'escapar', definicion: 'Get away.', ejemplo: 'He tries to escape.' }
  ],
  ilustraciones: [
    'Empty city at dawn',
    'Person running',
    'Phone with urgent message'
  ]
}

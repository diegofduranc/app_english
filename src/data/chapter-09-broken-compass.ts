import { Capitulo } from './types'

export const chapter09: Capitulo = {
  id: 9,
  titulo: 'The Broken Compass',
  genero: 'adventure',
  nivel: 'intermediate',
  icono: '🧭',
  lectura: {
    texto:
      "In the mountains, a compass stops working. The group is lost.\n\nWithout direction, they must trust the sun and the land.\n\nTogether, they find a safe path home.",
    palabrasClave: [
      { palabra: 'compass', traduccion: 'brújula' },
      { palabra: 'lost', traduccion: 'perdido' },
      { palabra: 'direction', traduccion: 'dirección' },
      { palabra: 'trust', traduccion: 'confiar' },
      { palabra: 'path', traduccion: 'camino' }
    ]
  },
  escucha: {
    quiz: [
      { pregunta: 'What breaks?', opciones: ['Map', 'Compass', 'Phone'], correcta: 1 },
      { pregunta: 'Where are they?', opciones: ['City', 'Mountains', 'Forest'], correcta: 1 },
      { pregunta: 'How do they succeed?', opciones: ['Together', 'Alone', 'By luck'], correcta: 0 }
    ]
  },
  escritura: {
    ejercicios: [
      { oracion: 'The ___ stops working.', respuesta: 'compass' },
      { oracion: 'They are ___.', respuesta: 'lost' },
      { oracion: 'They need ___.', respuesta: 'direction' },
      { oracion: 'They ___ each other.', respuesta: 'trust' },
      { oracion: 'They find a safe ___.', respuesta: 'path' }
    ]
  },
  practica: {
    tipo: 'match',
    pares: [
      { ingles: 'compass', esp: 'brújula' },
      { ingles: 'path', esp: 'camino' },
      { ingles: 'lost', esp: 'perdido' },
      { ingles: 'trust', esp: 'confiar' }
    ]
  },
  listaVocabulario: [
    { word: 'compass', traduccion: 'brújula', definicion: 'Shows direction.', ejemplo: 'The compass is broken.' },
    { word: 'trust', traduccion: 'confiar', definicion: 'Believe in someone.', ejemplo: 'They trust each other.' }
  ],
  ilustraciones: [
    'Mountains landscape',
    'Broken compass',
    'Group walking together'
  ]
}

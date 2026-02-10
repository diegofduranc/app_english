import { Capitulo } from './types'

export const chapter05: Capitulo = {
  id: 5,
  titulo: 'The Lost Backpack',
  genero: 'adventure',
  nivel: 'beginner',
  icono: '🎒',
  lectura: {
    texto:
      "Emma loses her backpack during a school trip. Inside are her phone and notes.\n\nShe returns to the forest path and follows her footprints. The sun starts to go down.\n\nAt last, she finds the backpack near a rock. She feels proud and relieved.",
    palabrasClave: [
      { palabra: 'backpack', traduccion: 'mochila' },
      { palabra: 'forest', traduccion: 'bosque' },
      { palabra: 'path', traduccion: 'camino' },
      { palabra: 'footprints', traduccion: 'huellas' },
      { palabra: 'rock', traduccion: 'roca' }
    ]
  },
  escucha: {
    quiz: [
      { pregunta: 'What does Emma lose?', opciones: ['Phone', 'Backpack', 'Shoes'], correcta: 1 },
      { pregunta: 'Where does she look?', opciones: ['City', 'Forest', 'School'], correcta: 1 },
      { pregunta: 'How does she feel at the end?', opciones: ['Angry', 'Relieved', 'Scared'], correcta: 1 }
    ]
  },
  escritura: {
    ejercicios: [
      { oracion: 'Emma loses her ___.', respuesta: 'backpack' },
      { oracion: 'She walks in the ___.', respuesta: 'forest' },
      { oracion: 'She follows her ___.', respuesta: 'footprints' },
      { oracion: 'The sun goes ___.', respuesta: 'down' },
      { oracion: 'She feels very ___.', respuesta: 'relieved' }
    ]
  },
  practica: {
    tipo: 'match',
    pares: [
      { ingles: 'backpack', esp: 'mochila' },
      { ingles: 'forest', esp: 'bosque' },
      { ingles: 'path', esp: 'camino' },
      { ingles: 'rock', esp: 'roca' }
    ]
  },
  listaVocabulario: [
    { word: 'backpack', traduccion: 'mochila', definicion: 'Bag carried on the back.', ejemplo: 'Her backpack is heavy.' },
    { word: 'footprints', traduccion: 'huellas', definicion: 'Marks left by feet.', ejemplo: 'Footprints on the ground.' },
    { word: 'relieved', traduccion: 'aliviado', definicion: 'Feeling calm again.', ejemplo: 'She feels relieved.' }
  ],
  ilustraciones: [
    'Forest path at sunset',
    'Girl searching with backpack',
    'Backpack near a rock'
  ]
}

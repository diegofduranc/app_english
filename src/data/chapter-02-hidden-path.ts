import { Capitulo } from './types'

export const chapter02: Capitulo = {
  id: 2,
  titulo: 'The Hidden Path',
  genero: 'adventure',
  nivel: 'beginner',
  icono: '🗺️',
  lectura: {
    texto:
      "Alex wakes up in a quiet coastal town. The streets are empty and the sky is gray.\n\nOn the table, a letter talks about a hidden path near the lighthouse. The town is in danger.\n\nAlex follows the path and sees a light flash. A new adventure begins.",
    palabrasClave: [
      { palabra: 'coastal', traduccion: 'costero' },
      { palabra: 'letter', traduccion: 'carta' },
      { palabra: 'path', traduccion: 'camino' },
      { palabra: 'danger', traduccion: 'peligro' },
      { palabra: 'lighthouse', traduccion: 'faro' }
    ]
  },
  escucha: {
    quiz: [
      { pregunta: 'Where does Alex wake up?', opciones: ['City', 'Coastal town', 'Forest'], correcta: 1 },
      { pregunta: 'What is near the lighthouse?', opciones: ['A house', 'A path', 'A river'], correcta: 1 },
      { pregunta: 'What is the town in?', opciones: ['Danger', 'Party', 'Peace'], correcta: 0 }
    ]
  },
  escritura: {
    ejercicios: [
      { oracion: 'Alex lives in a ___ town.', respuesta: 'coastal' },
      { oracion: 'There is a ___ on the table.', respuesta: 'letter' },
      { oracion: 'The town is in ___.', respuesta: 'danger' },
      { oracion: 'The path is near the ___.', respuesta: 'lighthouse' },
      { oracion: 'Alex starts an ___.', respuesta: 'adventure' }
    ]
  },
  practica: {
    tipo: 'match',
    pares: [
      { ingles: 'path', esp: 'camino' },
      { ingles: 'danger', esp: 'peligro' },
      { ingles: 'letter', esp: 'carta' },
      { ingles: 'lighthouse', esp: 'faro' }
    ]
  },
  listaVocabulario: [
    { word: 'path', traduccion: 'camino', definicion: 'A small road.', ejemplo: 'He walks the path.' },
    { word: 'danger', traduccion: 'peligro', definicion: 'Risk or harm.', ejemplo: 'The sign says danger.' },
    { word: 'letter', traduccion: 'carta', definicion: 'Written message.', ejemplo: 'She reads the letter.' },
    { word: 'lighthouse', traduccion: 'faro', definicion: 'Tower with light.', ejemplo: 'The lighthouse shines.' }
  ],
  ilustraciones: [
    'Empty coastal town',
    'Old lighthouse with light',
    'Hidden path by the sea'
  ]
}

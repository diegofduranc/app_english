import { useState } from 'react'

type QuizItem = {
  pregunta: string
  opciones: string[]
  correcta: number
}

type Props = {
  texto: string
  quiz: QuizItem[]
}

export default function ListenSection({ texto, quiz }: Props) {
  const [selected, setSelected] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = () => {
    if (!('speechSynthesis' in window)) return

    setIsPlaying(true)
    const utterance = new SpeechSynthesisUtterance(texto)
    utterance.lang = 'en-US'
    utterance.rate = 0.9

    utterance.onend = () => setIsPlaying(false)
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  }

  const isCorrect = (qIndex: number, oIndex: number) =>
    quiz[qIndex].correcta === oIndex

  return (
    <div className="space-y-6">
      {/* Audio */}
      <div className="flex items-center gap-4">
        <button
          onClick={playAudio}
          disabled={isPlaying}
          className="
            flex items-center gap-2 rounded-lg
            bg-indigo-600 px-4 py-2 text-white
            transition hover:bg-indigo-700 disabled:opacity-50
          "
        >
          {isPlaying ? '🔊 Playing...' : '▶ Listen'}
        </button>

        <p className="text-sm text-gray-500">
          Listen to the story and answer the questions
        </p>
      </div>

      {/* Quiz */}
      <div className="space-y-6">
        {quiz.map((q, qi) => (
          <div
            key={qi}
            className="glass-card p-5"
          >
            <p className="mb-3 font-medium text-gray-900">
              {qi + 1}. {q.pregunta}
            </p>

            <div className="space-y-2">
              {q.opciones.map((op, oi) => {
                const picked = selected[qi] === oi
                const correct = showResult && isCorrect(qi, oi)
                const wrong =
                  showResult && picked && !isCorrect(qi, oi)

                return (
                  <button
                    key={oi}
                    onClick={() =>
                      setSelected({ ...selected, [qi]: oi })
                    }
                    className={`
                      w-full text-left rounded-lg px-4 py-3 border
                      transition text-gray-800
                      ${
                        correct
                          ? 'bg-green-50 border-green-400'
                          : wrong
                          ? 'bg-red-50 border-red-400'
                          : picked
                          ? 'bg-indigo-50 border-indigo-300'
                          : 'bg-white border-gray-200 hover:bg-gray-50'
                      }
                    `}
                  >
                    {op}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Action */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowResult(true)}
          className="
            rounded-lg border border-gray-300
            px-5 py-2 text-sm font-medium
            text-gray-700 transition hover:bg-gray-100
          "
        >
          Check answers
        </button>
      </div>
    </div>
  )
}

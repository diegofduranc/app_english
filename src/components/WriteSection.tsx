import { useState } from 'react'

type Exercise = {
  oracion: string
  respuesta: string
  hint?: string
}

type Props = {
  ejercicios: Exercise[]
}

export default function WriteSection({ ejercicios }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)

  const normalize = (value: string) =>
    value.trim().toLowerCase()

  return (
    <div className="space-y-6">
      {ejercicios.map((ex, index) => {
        const userAnswer = answers[index] || ''
        const isCorrect =
          checked && normalize(userAnswer) === normalize(ex.respuesta)

        return (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <p className="mb-3 text-gray-900">
              {index + 1}.{' '}
              {ex.oracion.replace(
                '___',
                '______'
              )}
            </p>

            <input
              type="text"
              value={userAnswer}
              onChange={(e) =>
                setAnswers({
                  ...answers,
                  [index]: e.target.value,
                })
              }
              placeholder="Type your answer"
              className={`
                w-full rounded-lg border px-4 py-2
                focus:outline-none focus:ring-2
                ${
                  checked
                    ? isCorrect
                      ? 'border-green-400 focus:ring-green-200'
                      : 'border-red-400 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-blue-200'
                }
              `}
            />

            {/* Feedback */}
            {checked && (
              <p
                className={`mt-2 text-sm ${
                  isCorrect
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {isCorrect
                  ? '✓ Correct'
                  : `✗ Correct answer: "${ex.respuesta}"`}
              </p>
            )}

            {/* Hint */}
            {!checked && ex.hint && (
              <p className="mt-2 text-sm text-gray-500">
                💡 {ex.hint}
              </p>
            )}
          </div>
        )
      })}

      <div className="flex justify-end">
        <button
          onClick={() => setChecked(true)}
          className="
            rounded-lg bg-blue-600 px-6 py-2
            text-white font-medium
            transition hover:bg-blue-700
          "
        >
          Check writing
        </button>
      </div>
    </div>
  )
}

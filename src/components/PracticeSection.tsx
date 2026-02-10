import { useState } from 'react'

type Pair = {
  ingles: string
  esp: string
}

type Props = {
  pares: Pair[]
}

export default function PracticeSection({ pares }: Props) {
  const [selectedEn, setSelectedEn] = useState<string | null>(null)
  const [matched, setMatched] = useState<Pair[]>([])
  const [error, setError] = useState<string | null>(null)

  const isMatched = (en: string, es: string) =>
    matched.some((p) => p.ingles === en && p.esp === es)

  const handleSelect = (pair: Pair) => {
    if (!selectedEn) return

    const correct = pares.find(
      (p) => p.ingles === selectedEn && p.esp === pair.esp
    )

    if (correct) {
      setMatched([...matched, correct])
      setSelectedEn(null)
      setError(null)
    } else {
      setError('❌ Not a match')
      setSelectedEn(null)
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        Match the English words with their meaning
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* English */}
        <div className="space-y-2">
          {pares.map((p) => (
            <button
              key={p.ingles}
              onClick={() => setSelectedEn(p.ingles)}
              disabled={matched.some((m) => m.ingles === p.ingles)}
              className={`w-full rounded-lg border px-4 py-2 text-left
                ${
                  matched.some((m) => m.ingles === p.ingles)
                    ? 'bg-green-100 border-green-300'
                    : selectedEn === p.ingles
                    ? 'bg-blue-100 border-blue-300'
                    : 'bg-white border-gray-300 hover:bg-gray-50'
                }`}
            >
              {p.ingles}
            </button>
          ))}
        </div>

        {/* Spanish */}
        <div className="space-y-2">
          {pares.map((p) => (
            <button
              key={p.esp}
              onClick={() => handleSelect(p)}
              disabled={matched.some((m) => m.esp === p.esp)}
              className={`w-full rounded-lg border px-4 py-2 text-left
                ${
                  matched.some((m) => m.esp === p.esp)
                    ? 'bg-green-100 border-green-300'
                    : 'bg-white border-gray-300 hover:bg-gray-50'
                }`}
            >
              {p.esp}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {matched.length === pares.length && (
        <div className="rounded-lg bg-green-50 p-4 text-green-700">
          🎉 Great job!
        </div>
      )}
    </div>
  )
}

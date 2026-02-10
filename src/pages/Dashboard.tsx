import React from 'react'
import { chapters } from '../data/chapters'

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        🚀 Your Learning Journey
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((c) => (
          <div
            key={c.id}
            className="glass-card p-5 hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <div className="text-2xl mb-2">
              {c.icono} {c.titulo}
            </div>

            <div className="text-sm text-white/70 capitalize">
              {c.genero} · {c.nivel}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

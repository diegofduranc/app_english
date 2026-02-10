import { NavLink } from 'react-router-dom'
import { chapters } from '../data/chapters'

export default function Sidebar() {
  return (
    <aside
      className="
        hidden md:block
        w-64 shrink-0
        border-r border-gray-200
        bg-white/70 backdrop-blur
        p-4
      "
    >
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
        Chapters
      </h2>

      <nav className="space-y-1">
        {chapters.map((c) => (
          <NavLink
            key={c.id}
            to={`/chapter/${c.id}`}
            className={({ isActive }) =>
              `
              flex items-center gap-3 rounded-lg px-3 py-2 text-sm
              transition
              ${
                isActive
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }
            `
            }
          >
            <span className="text-lg">{c.icono}</span>
            <span className="truncate">{c.titulo}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

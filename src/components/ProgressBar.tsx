import React from 'react'

export default function ProgressBar({ value = 0 }: { value: number }) {
  return (
    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
      <div className="h-3 bg-gradient-to-r from-pink-500 via-indigo-500 to-green-400" style={{ width: `${value}%` }} />
    </div>
  )
}

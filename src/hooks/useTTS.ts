import { useState, useCallback } from 'react'

export function useTTS() {
  const [rate, setRate] = useState(1)
  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return
    const utter = new SpeechSynthesisUtterance(text)
    utter.rate = rate
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utter)
  }, [rate])

  return { speak, rate, setRate }
}

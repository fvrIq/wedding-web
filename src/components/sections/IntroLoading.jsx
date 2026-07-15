import { useEffect, useState } from 'react'

export default function IntroLoading({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2200)
    const finishTimer = setTimeout(() => onFinish(), 2700)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-warm-950 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ornamen garis atas */}
      <div className="w-12 h-[1px] bg-gold-shine mb-6 animate-expand" />

      <p className="font-serif text-2xl md:text-3xl tracking-widest text-gold-shine text-center px-6 animate-shimmer">
        Welcome to
        <br />
        Our Wedding
      </p>

      {/* Ornamen garis bawah */}
      <div className="w-12 h-[1px] bg-gold-shine mt-6 animate-expand" />
    </div>
  )
}
import { useState } from 'react'
import { config } from '../../data/config'

export default function LoadingScreen({ onOpen }) {
  const [isClosing, setIsClosing] = useState(false)

  const handleOpenClick = () => {
    setIsClosing(true)
    setTimeout(() => {
      onOpen()
    }, 700)
  }

  const { groom, bride } = config.couple
  const { mainPhoto } = config.welcome

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center transition-all duration-700 ease-out ${
        isClosing ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ backgroundImage: `url(${mainPhoto})` }}
    >
      {/* Overlay gelap supaya teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-6">
        <p className="font-serif italic text-gold text-sm md:text-base tracking-widest mb-4">
          The Wedding of
        </p>

        <h1 className="font-serif text-5xl md:text-6xl text-gold leading-tight">
          {groom.nickname}
        </h1>

        <p className="font-serif text-3xl md:text-4xl text-gold my-2">&</p>

        <h1 className="font-serif text-5xl md:text-6xl text-gold leading-tight">
          {bride.nickname}
        </h1>

        <div className="w-16 h-[1px] bg-gold mx-auto my-8" />

        <button
          onClick={handleOpenClick}
          disabled={isClosing}
          className="bg-gold text-warm-900 font-medium text-sm tracking-widest uppercase px-10 py-4 rounded-full shadow-lg transition-transform duration-300 active:scale-95 disabled:opacity-70"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  )
}
import { config } from '../../data/config'

export default function Welcome() {
  const { groom, bride } = config.couple
  const { quote, quoteSource, mainPhoto } = config.welcome

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Foto background full-screen */}
      <img
        src={mainPhoto}
        alt="Foto pasangan"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gelap biar teks kebaca */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-900/50 via-warm-900/30 to-warm-900/70" />

      {/* Konten teks di atas foto */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="ornament text-gold-200 font-semibold text-base md:text-lg drop-shadow-md">Bismillahirrahmanirrahim</p>

        <h2 className="font-serif text-4xl md:text-6xl text-cream-50 mt-6 drop-shadow-lg">
          {groom.nickname} <span className="font-script italic text-gold-300">&</span> {bride.nickname}
        </h2>

        <div className="w-16 h-px bg-gold-300 my-6" />

        <p className="max-w-xl text-cream-100 leading-relaxed text-sm md:text-base italic drop-shadow">
          {quote}
        </p>
        <p className="text-gold-200 text-xs tracking-widest uppercase mt-3 drop-shadow">
          {quoteSource}
        </p>
      </div>
    </section>
  )
}
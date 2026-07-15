import { config } from '../../data/config'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Closing() {
  const [ref, isVisible] = useScrollReveal()
  const { message, coupleNames, backgroundImage } = config.closing

  return (
    <section
      className="relative section-padding bg-cover bg-center bg-fixed min-h-[70vh] flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        ref={ref}
        className={`reveal ${isVisible ? 'visible' : ''} relative z-10 max-w-lg mx-auto px-4 text-center`}
      >
        <p className="ornament text-cream-100">Terima Kasih</p>

        <p className="text-cream-100 text-sm md:text-base leading-relaxed mt-4 mb-6">
          {message}
        </p>

        <div className="gold-divider mb-6" />

        <p className="font-serif text-2xl md:text-3xl text-cream-50">
          {coupleNames}
        </p>
      </div>
    </section>
  )
}
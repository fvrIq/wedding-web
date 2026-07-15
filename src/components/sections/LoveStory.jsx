import { config } from '../../data/config'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function StoryCard({ item, index }) {
  const [ref, isVisible] = useScrollReveal()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} flex flex-col ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center gap-6 md:gap-12 mb-16 md:mb-24`}
    >
      <div className="w-full md:w-1/2">
        <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/5] max-w-sm mx-auto">
          <img
            src={item.photo}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <p className="ornament">{item.date}</p>
        <h3 className="font-serif text-2xl md:text-3xl text-warm-800 mt-2 mb-3">
          {item.title}
        </h3>
        <p className="text-warm-600 leading-relaxed text-sm md:text-base">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function LoveStory() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="text-center mb-16">
        <p className="ornament">Perjalanan Kami</p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-800 mt-2">
          Love Story
        </h2>
        <div className="gold-divider" />
      </div>

      <div className="max-w-4xl mx-auto">
        {config.loveStory.map((item, index) => (
          <StoryCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
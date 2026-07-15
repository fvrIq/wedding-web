import { config } from '../../data/config'
import { useCountdown } from '../../hooks/useCountdown'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function CountdownBox({ value, label }) {
  return (
    <div className="flex flex-col items-center bg-cream-50/80 rounded-lg px-4 py-3 min-w-[70px] shadow-sm">
      <span className="font-serif text-2xl md:text-3xl text-warm-800">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs uppercase tracking-widest text-warm-600 mt-1">
        {label}
      </span>
    </div>
  )
}

function SessionCard({ session }) {
  return (
    <div className="bg-cream-50 rounded-lg shadow-md p-6 md:p-8 text-center max-w-sm w-full">
      <p className="ornament">{session.title}</p>
      <h3 className="font-serif text-2xl text-warm-800 mt-2 mb-4">
        {session.date}
      </h3>
      <p className="text-warm-600 text-sm mb-1">{session.time}</p>
      <div className="w-10 h-px bg-gold-300 mx-auto my-4" />
      <p className="text-warm-800 font-medium">{session.location}</p>
      <p className="text-warm-600 text-sm mt-1">{session.address}</p>
    </div>
  )
}

export default function Event() {
  const [ref, isVisible] = useScrollReveal()
  const { days, hours, minutes, seconds } = useCountdown(config.event.countdownTarget)

  return (
    <section className="section-padding bg-cream-200">
      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} text-center mb-12`}>
        <p className="ornament">Save The Date</p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-800 mt-2">
          Wedding Event
        </h2>
        <div className="gold-divider" />
      </div>

      <div className="flex justify-center gap-3 md:gap-5 mb-14">
        <CountdownBox value={days} label="Hari" />
        <CountdownBox value={hours} label="Jam" />
        <CountdownBox value={minutes} label="Menit" />
        <CountdownBox value={seconds} label="Detik" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-14 px-4">
        {config.event.sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
          <iframe
            src={config.event.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Lokasi Acara"
          ></iframe>
        </div>
        <div className="text-center mt-4">
          <a href={config.event.mapLinkUrl} target="_blank" className="inline-block bg-warm-800 text-cream-50 text-sm px-6 py-3 rounded-full hover:bg-warm-900 transition-colors">
            Buka di Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
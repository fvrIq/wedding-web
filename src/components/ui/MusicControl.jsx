export default function MusicControl({ isPlaying, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause musik' : 'Play musik'}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-warm-800/80 backdrop-blur-sm
        text-cream-50 shadow-lg
        flex items-center justify-center
        hover:bg-warm-900 hover:scale-110
        transition-all duration-300
      `}
    >
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5.14v14l11-7-11-7z" />
        </svg>
      )}

      {isPlaying && (
        <span className="absolute inset-0 rounded-full ring-2 ring-warm-400 animate-ping opacity-30" />
      )}
    </button>
  )
}
import { useState, useRef, useEffect } from 'react'
import IntroLoading from './components/sections/IntroLoading'
import LoadingScreen from './components/sections/LoadingScreen'
import Welcome from './components/sections/Welcome'
import LoveStory from './components/sections/LoveStory'
import Event from './components/sections/Event'
import Gallery from './components/sections/Gallery'
import Gift from './components/sections/Gift'
import Closing from './components/sections/Closing'
import MusicControl from './components/ui/MusicControl'
import { config } from './data/config'

function App() {
  const [introsDone, setIntrosDone] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = new Audio(config.music.src)
    audio.loop = true
    audio.volume = config.music.volume ?? 0.5
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const handleOpen = () => {
    setIsOpen(true)

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        console.warn('Autoplay diblokir browser.')
      })
  }

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="relative overflow-x-hidden">
      {!introsDone && <IntroLoading onFinish={() => setIntrosDone(true)} />}

      {introsDone && !isOpen && <LoadingScreen onOpen={handleOpen} />}

      {isOpen && (
        <>
          <Welcome />
          <LoveStory />
          <Event />
          <Gallery />
          <Gift />
          <Closing />
          <MusicControl isPlaying={isPlaying} onToggle={toggleMusic} />
        </>
      )}
    </div>
  )
}

export default App
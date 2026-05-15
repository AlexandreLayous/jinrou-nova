import { useEffect, useState } from 'react'
import HomeView from './views/HomeView.jsx'

const INTRO_STORAGE_KEY = 'jinroNovaIntroSeen'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [hasSeenIntro] = useState(() => (
    localStorage.getItem(INTRO_STORAGE_KEY) === 'true'
  ))

  useEffect(() => {
    if (!hasSeenIntro) {
      localStorage.setItem(INTRO_STORAGE_KEY, 'true')
    }
  }, [hasSeenIntro])

  return (
    <HomeView
      hasSeenIntro={hasSeenIntro}
      onPlay={() => alert('Fonctionnalité à venir !')}
    />
  )
}

export default App

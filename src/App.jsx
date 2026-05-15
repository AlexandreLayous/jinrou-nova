import { useEffect, useState } from 'react'
import AppShell from './components/AppShell.jsx'
import HomeView from './views/HomeView.jsx'
import SetupView from './views/SetupView.jsx'

const INTRO_STORAGE_KEY = 'jinroNovaIntroSeen'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [isLeavingHome, setIsLeavingHome] = useState(false)
  const [hasSeenIntro] = useState(() => (
    localStorage.getItem(INTRO_STORAGE_KEY) === 'true'
  ))

  useEffect(() => {
    if (!hasSeenIntro) {
      localStorage.setItem(INTRO_STORAGE_KEY, 'true')
    }
  }, [hasSeenIntro])

  function handlePlay() {
    if (isLeavingHome) {
      return
    }

    setIsLeavingHome(true)
  }

  return (
    <AppShell>
      {currentView === 'setup' ? (
        <SetupView />
      ) : (
        <HomeView
          hasSeenIntro={hasSeenIntro}
          isLeaving={isLeavingHome}
          onPlay={handlePlay}
          onExitComplete={() => setCurrentView('setup')}
        />
      )}
    </AppShell>
  )
}

export default App

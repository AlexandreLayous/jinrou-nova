import ChevronRightIcon from '../components/ChevronRightIcon.jsx'
import './HomeView.css'

function HomeView({ hasSeenIntro, isLeaving, onExitComplete, onPlay }) {
    function handleCenteredContentAnimationEnd(event) {
        if (event.animationName === 'fadeOut') {
            onExitComplete()
        }
    }

    return (
        <div
            className={`centered-content ${hasSeenIntro ? 'intro-seen' : ''} ${isLeaving ? 'home-leaving' : ''}`}
            onAnimationEnd={handleCenteredContentAnimationEnd}
        >
                <span className="description">
                    Jinrō est un jeu où les joueurs incarnent des membres de l'équipe Nova et doivent mener à bien un projet critique.
                </span>

                <span className="description_2">
                    Pour ne rien faciliter, des saboteurs infiltrés cherchent à faire échouer la mission...
                </span>

                <button className="play-button" onClick={onPlay}>
                    <span className="play-button-label">Jouer à Jinrō</span>
                    <span className="play-button-icon-circle" aria-hidden="true">
                        <ChevronRightIcon className="play-button-icon" />
                    </span>
                </button>
        </div>
    )
}

export default HomeView

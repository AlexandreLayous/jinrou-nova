import ChevronRightIcon from '../components/ChevronRightIcon.jsx'
import './HomeView.css'

function HomeView({ hasSeenIntro, onPlay }) {
    const baseUrl = import.meta.env.BASE_URL

    return (
        <div className={`container ${hasSeenIntro ? 'intro-seen' : ''}`}>
            <a className="logo-link" href={baseUrl} aria-label="Retour à l'accueil">
                <picture>
                    <source
                        srcSet={`${baseUrl}favicon_dark.svg`}
                        media="(prefers-color-scheme: dark)"
                    />
                    <img
                        className="logo-mark"
                        src={`${baseUrl}favicon_light.svg`}
                        alt="Logo Jinrō"
                        width="72"
                        height="72"
                    />
                </picture>

                <div className="logo-text">
                    <h1>Jinrō 人狼</h1>
                    <h2>("Homme-loup")</h2>
                </div>
            </a>

            <div className="centered-content">
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

            <div className="footer">
                <p>Développé par Alexandre LAYOUS</p>
            </div>
        </div>
    )
}

export default HomeView

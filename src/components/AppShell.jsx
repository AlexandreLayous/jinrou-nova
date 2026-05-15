import './AppShell.css'

function AppShell({ children }) {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="app-shell">
      <a className="app-logo-link" href={baseUrl} aria-label="Retour à l'accueil">
        <picture>
          <source
            srcSet={`${baseUrl}favicon_dark.svg`}
            media="(prefers-color-scheme: dark)"
          />
          <img
            className="app-logo-mark"
            src={`${baseUrl}favicon_light.svg`}
            alt="Logo Jinrō"
            width="72"
            height="72"
          />
        </picture>

        <div className="app-logo-text">
          <h1>Jinrō 人狼</h1>
          <h2>("Homme-loup")</h2>
        </div>
      </a>

      {children}

      <div className="app-footer">
        <p>Développé par Alexandre LAYOUS</p>
      </div>
    </div>
  )
}

export default AppShell

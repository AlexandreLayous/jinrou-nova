import './App.css'
import logoDark from '/jinrou_dark_180x180.png'
import logoLight from '/jinrou_light_180x180.png'

function App() {

  return (
    <>
      <div className="container">
        <a className="logo-link" href="/" aria-label="Retour à l'accueil">
          <picture>
            <source srcSet={logoDark} media="(prefers-color-scheme: dark)" />
            <img className="logo-mark" src={logoLight} alt="" width="72" height="72" />
          </picture>
          <div className="logo-text">
            <h1>Jinrō 人狼</h1>
            <h2>("Homme-loup")</h2>
          </div>
        </a>
      </div>
    </>
  )
}

export default App

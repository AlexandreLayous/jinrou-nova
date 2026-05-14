import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <a className="logo-link" href="/" aria-label="Retour à l'accueil">
          <picture>
            <source
              srcSet="/favicon_dark.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              className="logo-mark"
              src="/favicon_light.svg"
              alt=""
              width="72"
              height="72"
            />
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

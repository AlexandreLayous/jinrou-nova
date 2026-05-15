import './SetupView.css'
import { useState } from 'react'

const PARTICIPANTS_STORAGE_KEY = 'jinroNovaParticipants'

function SetupView() {
  const [participants, setParticipants] = useState(() => {
    const stored = sessionStorage.getItem(PARTICIPANTS_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })
  const [participantName, setParticipantName] = useState('')
  const canStartGame = participants.length >= 4

  function saveParticipants(nextParticipants) {
    sessionStorage.setItem(PARTICIPANTS_STORAGE_KEY, JSON.stringify(nextParticipants))
    return nextParticipants
  }

  function addParticipant() {
    const trimmedName = participantName.trim()

    if (!trimmedName) {
      return
    }

    setParticipants((previousParticipants) => (
      saveParticipants([...previousParticipants, trimmedName])
    ))
    setParticipantName('')
  }

  function removeParticipant(participantIndex) {
    setParticipants((previousParticipants) => (
      saveParticipants(previousParticipants.filter((_, index) => index !== participantIndex))
    ))
  }

  return (
    <div className="setup-centered-content">
      <h3 className="setup-intro">
        Ajout des participants
      </h3>

      <div className="setup-add-participant">
        <input
          type="text"
          className="setup-participant-input"
          placeholder="Nom du participant"
          value={participantName}
          onChange={(event) => setParticipantName(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              addParticipant()
            }
          }}
        />

        <button
          className="setup-add-button"
          type="button"
          onClick={addParticipant}
        >
          Ajouter
        </button>
      </div>

      <ul className="setup-participants-list">
        {participants.map((name, index) => (
          <li key={index} className="setup-participant-item">
            <span>{name}</span>
            <button
              className="setup-remove-button"
              type="button"
              onClick={() => removeParticipant(index)}
              aria-label={`Supprimer ${name}`}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      <button
        className="setup-start-button"
        type="button"
        disabled={!canStartGame}
        onClick={() => alert('Fonctionnalité à venir !')}
      >
        Démarrer la partie
      </button>
    </div>
  )
}

export default SetupView

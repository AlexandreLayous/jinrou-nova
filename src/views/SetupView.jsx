import './SetupView.css'
import { useState } from 'react'

const PARTICIPANTS_STORAGE_KEY = 'jinroNovaParticipants'
const PARTICIPANT_NAME_MAX_LENGTH = 20

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

    if (trimmedName.length > PARTICIPANT_NAME_MAX_LENGTH) {
      alert(`Le prénom doit contenir ${PARTICIPANT_NAME_MAX_LENGTH} caractères maximum.`)
      return
    }

    const participantAlreadyExists = participants.some((participant) => (
      participant.toLocaleLowerCase() === trimmedName.toLocaleLowerCase()
    ))

    if (participantAlreadyExists) {
      alert(`${trimmedName} est déjà présent.e.`)
      return
    }

    setParticipants(saveParticipants([...participants, trimmedName]))
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
          maxLength={PARTICIPANT_NAME_MAX_LENGTH}
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
            <span className="setup-participant-name">{name}</span>
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

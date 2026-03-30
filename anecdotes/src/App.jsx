import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent...',
    'Any fool can write code...',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard...',
    'Programming without console.log...',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>

      <button onClick={handleNext}>
        next anecdote
      </button>
    </div>
  )
}

export default App
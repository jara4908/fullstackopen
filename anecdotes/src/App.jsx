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

  const [votes, setVotes] = useState(
    new Array(anecdotes.length).fill(0)
  )

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  // 🔥 NUEVO (lo importante del 1.14)
  const maxVotes = Math.max(...votes)
  const indexMax = votes.indexOf(maxVotes)

  return (
    <div>
      <h2>Anecdote of the day</h2>

      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>

      <h2>Anecdote with most votes</h2>

      <p>{anecdotes[indexMax]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App
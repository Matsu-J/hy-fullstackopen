import { useState } from 'react'

const Header = ({ content }) => {
  return (
    <h1>{content}</h1>
  )
}

const Paragraph = ({ content }) => {
  return (
    <p>{content}</p>
  )
}

const Button = ({ click, text }) => {
  return (
    <button onClick={click}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const amountOfAnecdotes = anecdotes.length

  const [mostVoted, setMostVoted] = useState(0)

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * (amountOfAnecdotes)))
  }

  const votes = {}

  for (let i = 0; i < amountOfAnecdotes; i++) {
    votes[i] = 0
  }

  const [copy, setCopy] = useState({ ...votes })

  const upvote = () => {
    setCopy(prevCopy => ({
      ...prevCopy,
      [selected]: copy[selected] + 1
    })
    )
    if (copy[selected] + 1 > copy[mostVoted]) {
      setMostVoted(selected)
    }
  }


  return (
    <div>
      <Header content="Anecdote of the day"/>
      <Paragraph content={anecdotes[selected]} />
      <Paragraph content={`Has ${copy[selected]} votes`} />
      <Button click={nextAnecdote} text="Next anecdote" />
      <Button click={upvote} text="Upvote" />

      <Header content="Most upvoted anecdote"/>
      <Paragraph content={anecdotes[mostVoted]} />
    </div>
  )
}

export default App
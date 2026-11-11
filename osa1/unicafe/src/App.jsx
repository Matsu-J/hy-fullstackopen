import { useState } from 'react'

const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({click, text}) => {
  return (
    <button onClick={click}>{text}</button>
  )
}

const Statistics = ({type, amount}) => {
  return (
    <p>{type}: {amount}</p>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)

  let positive = ((good/all)*100).toString() + " %";
  let average = score/all;

  const handleGood = () => {
    setGood(good+1)
    setAll(all+1)
    setScore(score+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setScore(score)
  }

  const handleNegative = () => {
    setBad(bad+1)
    setAll(all+1)
    setScore(score-1)
  }

  return (
    <div>
      <Header text="Give feedback!"/>
      <Button click={handleGood} text="Good"/>
      <Button click={handleNeutral} text="Neutral"/>
      <Button click={handleNegative} text="Bad"/>
      <Header text="Statistics"/>
      <Statistics type="Good" amount={good}/>
      <Statistics type="Neutral" amount={neutral}/>
      <Statistics type="Bad" amount={bad}/>
      <Statistics type="All" amount={all}/>
      <Statistics type="Average" amount={average}/>
      <Statistics type="Positive" amount={positive}/>
    </div>
  )
}

export default App
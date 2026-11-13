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


const StatisticLine = ({type, amount}) => {
  return(
    <tr>
      <td>{type}:</td>
      <td>{amount}</td>
    </tr>
  )
}


const Statistics = ({good, neutral, bad, all, average, positive}) => {

  if (all <= 0) {
    return (
      <p>No feedback given!</p>
    )
  }
  
  return (
    <table>
      <tbody>
        <StatisticLine type="Good" amount={good}/>
        <StatisticLine type="Neutral" amount={neutral}/>
        <StatisticLine type="Bad" amount={bad}/>
        <StatisticLine type="All" amount={all}/>
        <StatisticLine type="Average" amount={average}/>
        <StatisticLine type="Positive" amount={positive}/>
      </tbody>
    </table>
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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} positive={positive} average={average}/>
    </div>
  )
}

export default App
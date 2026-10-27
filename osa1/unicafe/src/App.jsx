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

const Stat = ({type, amount}) => {
  return (
    <p>{type}: {amount}</p>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlePositive = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleNegative = () => setBad(bad+1)


  return (
    <div>
      <Header text="Give feedback!"/>
      <Button click={handlePositive} text="Good"/>
      <Button click={handleNeutral} text="Neutral"/>
      <Button click={handleNegative} text="Bad"/>
      <Header text="Statistics"/>
      <Stat type="Good" amount={good}/>
      <Stat type="Neutral" amount={neutral}/>
      <Stat type="Bad" amount={bad}/>
    </div>
  )
}

export default App
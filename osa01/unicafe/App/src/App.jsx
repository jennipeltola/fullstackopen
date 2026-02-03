import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <div>No feedback given</div>
  }
  // If total is 0, set average to 0, otherwise make the calculation (prevents
  // division with 0)
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  return (
    <>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={total} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={`${positive}%`} />
    </>
  )
}

const StatisticsLine = ({ text, value }) => <div>{text} {value}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
        <Button text="good" onClick={() => setGood(good +1)} />
        <Button text="neutral" onClick={() => setNeutral(neutral +1)} />
        <Button text="bad" onClick={() => setBad(bad +1)} />
      <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}></ Statistics>
    </div>
  )
}

export default App
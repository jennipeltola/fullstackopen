import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / total
  const positive = (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>
        <button onClick={() => setGood(good +1)}>good</button>
        <button onClick={() => setNeutral(neutral +1)}>neutral</button>
        <button onClick={() => setBad(bad +1)}>bad</button>
      <h1>statistics</h1>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>total {total}</div>
        <div>average {average}</div>
        <div>positive {positive} %</div>
    </div>
  )
}

export default App
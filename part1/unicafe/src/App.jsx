import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => <p>{text}: {value}</p>

const Statistics = ({ stats }) => {
  let all = stats.good + stats.neutral + stats.bad
  console.log(`all = ${all}`)
  let average = all === 0 ? 0 : (stats.good - stats.bad) / all
  let positive = all === 0 ? 0 : (stats.good / all) * 100 + "%"

  // console.log(stats)

  return all === 0 ? "No feedback given" : (
    <div>
      <StatisticLine text="good" value={stats.good} />
      <StatisticLine text="neutral" value={stats.neutral} />
      <StatisticLine text="bad" value={stats.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button text="good" onClick={handleGoodClick} />
        <Button text="neutral" onClick={handleNeutralClick} />
        <Button text="bad" onClick={handleBadClick} />
      </div>
      <h2>statistics</h2>
      <Statistics stats={{ good, neutral, bad }} />
    </div>
  )
}

export default App

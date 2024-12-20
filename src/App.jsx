import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





const Button = ({handleClick, text}) =>{
  return(
  <button className='feedback-button' onClick={handleClick}>{text}</button>
  )
}

const StatisticsLine = (props) => {
  return( 
    <>
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
      </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad, total}) =>{
    if(total === 0){
      return (
        <div className='no-feedback'>No FeedBack Given</div>
      )
    }
    const average = (good - bad) / total
    const positivePercentage = ((good / total) * 100).toFixed(2)

    return(
      <div className='statistics'>
      <table>
        <tbody>
        <StatisticsLine text='Good' value = {good} />
        <StatisticsLine text='Neutral' value = {neutral} />
        <StatisticsLine text='Bad' value = {bad} />
        <StatisticsLine text='Total' value = {total} />
        <StatisticsLine text='Average' value = {average.toFixed(2)} />
        <StatisticsLine text='Positive' value = {`${positivePercentage} %`} />
        </tbody>
      </table>
      
      </div>
    )
}


function App() {
     const [good, setGood] = useState(0)
     const [neutral, setNeutral] = useState(0)
     const [bad, setBad] = useState(0)
     const [total, setTotal] = useState(0)

     const handleGoodClick = () => {
      const updatedGood = good + 1
      setGood(updatedGood)
      setTotal(updatedGood + neutral + bad)
     }

     const handleNeutralClick = () => {
      const updatedNeutral = neutral + 1
      setNeutral(updatedNeutral)
      setTotal(good + updatedNeutral + bad)
     }

     const handleBadClick = () => {
      const updatedBad = bad + 1
      setBad(updatedBad)
      setTotal(good + neutral + updatedBad)
     }



  return (
   <div className='app'>
   <h1 className='header'>Give feedback</h1>
   <div className='buttons'>
   <Button handleClick = {handleGoodClick} text='Good' />
   <Button handleClick={handleNeutralClick} text='Neutral' />
   <Button handleClick={handleBadClick} text='Bad' /> 
   </div>
   
   <h2 className='sub-header'>Statistics</h2>
   
   
   < Statistics good = {good}  neutral={neutral} bad={bad} total={total}  />
   </div>
  )
}

export default App

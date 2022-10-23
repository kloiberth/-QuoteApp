import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuotesBox from './components/QuotesBox'
import quotes from './quotes.json';

function App() {

  const colors = ["#ff99c9", "#12432c", "#0096ff", "#520b26", "#b7041c", "#ff5e1f", "#ffa81e", "#2fc22f", "#c297ff", "#ffcf7f", "#DBF227", "#042940", "#731702" , "#FF4858"];
   
  const [index, setIndex] = useState(Math.floor(Math.random() * colors.length))

  const [indexQuotes, setIndexQuotes] = useState(Math.floor(Math.random() * quotes.length))

  const changeAll = () => {

    setIndex(Math.floor(Math.random() * colors.length))
    
    setIndexQuotes(Math.floor(Math.random() * quotes.length))


  }

  document.body.style=`background: ${colors[index]}`

  return (
    <div className="App">
      <QuotesBox colors={colors} index={index} change={changeAll} indexQuotes={indexQuotes}/>
    </div>
  )
}

export default App

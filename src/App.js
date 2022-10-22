
import './App.css';
import Card from './components/Card/Card';
import { useState } from 'react'

import SubCard from './components/SubCard/SubCard';
function App() {
  const [rating,setRating] = useState(1)
  const [submitted,setSubmitted] = useState(false)



  const handleClick = (e) => {
    const ratingNum = e.target.innerHTML
    setRating(ratingNum)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }




  return (
    <div className="App">
      {
        submitted ?
        <SubCard rating={rating}/>  
        :
        <Card
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        rating={rating}
        />
      }
    </div>
  );
}

export default App;

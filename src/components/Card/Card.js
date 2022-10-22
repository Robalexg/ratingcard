import './Card.css'
import { useState } from 'react'


const Card = () => {
    const [rating,setRating] = useState(1)
    const [submitted,setSubmitted] = useState(true)

    const handleClick = (e) => {
        const ratingNum = e.target.innerHTML
        setRating(ratingNum)
    }


    const handleSubmit = () => {
        console.log(rating)
        setSubmitted(true)
    }
    return(
        <section className='card--container'>  
            {
                submitted ? 
                   <>
                        <img className='subcard--image' src="../images/illustration-thank-you.svg" alt="" />
                        <h2 className='subcard--ratingText' >You selected {rating} out of 5</h2>
                        <h1 className='subcard--title' >Thank you!</h1>
                        <p className='subcard--desc' >x</p>
                   </> 
                : 
                    <>
                        <div className='card--starContainer'>
                            <img className='card--star' src="../images/icon-star.svg" alt="" />
                        </div>
                        <h1 className='card--title'>How did we do?</h1>
                        <p className='card--desc'>
                            Please let us know how we did with your support 
                            request. All feedback is appreciated to help us
                            improve our offerings!
                        </p>
                        <div className='card--ratingContainer' >
                            <div onClick={handleClick} className={`card--rating ${rating === "1" ? 'card--checked': ''  }`}>1</div>
                            <div onClick={handleClick} className={`card--rating ${rating === "2" ? 'card--checked': ''  }`}>2</div>
                            <div onClick={handleClick} className={`card--rating ${rating === "3" ? 'card--checked': ''  }`}>3</div>
                            <div onClick={handleClick} className={`card--rating ${rating === "4" ? 'card--checked': ''  }`}>4</div>
                            <div onClick={handleClick} className={`card--rating ${rating === "5" ? 'card--checked': ''  }`}>5</div>
                        </div>
                        <button onClick={handleSubmit} className='card--button'>SUBMIT</button>
                    </>
            }
        </section>
    )
}

export default Card
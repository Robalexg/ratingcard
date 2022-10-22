import './Card.css'
import { useState } from 'react'


const Card = () => {
    const [rating,setRating] = useState('')

    const handleClick = (e) => {
        const ratingNum = e.target.innerHTML
        setRating(ratingNum)
    }

    console.log(rating)


    return(
        <section className='card--container'>  
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
            <button className='card--button'>SUBMIT</button>
        </section>
    )
}

export default Card
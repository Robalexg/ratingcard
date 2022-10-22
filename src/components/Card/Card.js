import './Card.css'


const Card = () => {
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
                <div className='card--rating'>1</div>
                <div className='card--rating'>2</div>
                <div className='card--rating'>3</div>
                <div className='card--rating'>4</div>
                <div className='card--rating'>5</div>
            </div>
            <button className='card--button'>SUBMIT</button>
        </section>
    )
}

export default Card
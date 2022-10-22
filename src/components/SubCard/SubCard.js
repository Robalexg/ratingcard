import './SubCard.css'


const SubCard  = ({rating}) => {
    return (
        <section className='subcard--container'>
            <img className='subcard--image' src="../images/illustration-thank-you.svg" alt="" />
            <h2 className='subcard--ratingText' >You selected {rating} out of 5</h2>
            <h1 className='subcard--title' >Thank you!</h1>
            <p className='subcard--desc' >
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get
                in touch! 
            </p>
        </section>
    )
} 

export default SubCard
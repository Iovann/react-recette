import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Share from '../components/share'
import Recipe_card from '../components/recipe_card'
import Row_card from '../components/row_card'
const Home = () => {
    return (
        <>
            <div id='fond'>
                <Navbar />
                <Hero />
            </div>
            <Share />
            <div className="container py-5">
                <h1>À la une</h1>
                <p className='brown fs-5 fw-bold text-end pb-5 pt-0'>Voir plus</p>
                <Row_card/>
            </div>

        </>
    )
}

export default Home

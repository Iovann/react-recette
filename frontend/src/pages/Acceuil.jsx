import React, { useEffect, useState } from 'react'
import NavbarProfile from '../components/NavbarProfile'
import Hero from '../components/hero'
import Share from '../components/share'
import Row_card from '../components/row_card'
import Blog_row from '../components/blog_row'
import Popular_row from '../components/popular_row'
import { dataCategorie, dataRecipe, dataCard } from '../common/data';
import Footer from '../components/footer';

const Acceuil = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        setCard(dataCard.slice(0, 6));
    }, []);

    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        setRecipe(dataRecipe.slice(0, 6));
    }, []);

    const [categorie, setCategorie] = useState([]);
    useEffect(() => {
        setCategorie(dataCategorie.slice(0, 8));
    }, []);

    return (
        <>
            <div id='fond'>
                <NavbarProfile />
                <Hero />
            </div>
            <Share />
            <div className="container py-5">
                <h1>À la une</h1>
                <p className='brown fs-5 fw-bold text-end pb-5 pt-0'>Voir plus</p>
                <Row_card card={card} />
            </div>
            <div className="container py-5">
                <h1>Blog</h1>
                <p className='brown fs-5 fw-bold text-end pb-5 pt-0'>Voir plus</p>
                <Blog_row />
            </div>
            <div className="container pb-5">
                <h1>Explorez les recettes</h1>
                <p className='brown fs-5 fw-bold text-end pb-5 pt-0'>Voir plus</p>
                <Row_card card={recipe} />
            </div>

            <div className="container py-5">
                <h1>Categories Populaire</h1>
                <p className='brown fs-5 fw-bold text-end pb-5 pt-0'>Voir plus</p>
                <Popular_row pop={categorie} />
            </div>
            <Footer />
        </>
    )
}

export default Acceuil
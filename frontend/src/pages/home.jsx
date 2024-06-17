import React, {useEffect, useState} from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Share from '../components/share'
import Row_card from '../components/row_card'
import Blog_row from '../components/blog_row'

const Home = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        const data = [
            { image: '/assets/images/food_5.jpg', title: 'Voandzou', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 2.9, cals: 534 },
            { image: '/assets/images/food_2.jpg', title: 'Salade', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 3.0, cals: 100 },
            { image: '/assets/images/food_3.jpg', title: 'Spaghetti', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 4.9, cals: 237 },
            { image: '/assets/images/food_6.jpg', title: 'Riz', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 4.0, cals: 150 },
            { image: '/assets/images/food_9.jpg', title: 'Vermicelle', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 3.5, cals: 134 },
            { image: '/assets/images/food_7.jpg', title: 'Pâte Noire', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 5.5, cals: 432 },
        ];
        setCard(data.slice(0, 6));
    }, []);

    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        const data = [
            { image: '/assets/images/food_10.jpg', title: 'Akassa', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 3.9, cals: 234 },
            { image: '/assets/images/food_11.jpg', title: 'Riz au Poisson', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 4.0, cals: 150 },
            { image: '/assets/images/food_12.jpg', title: 'Aloko', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 4.9, cals: 217 },
            { image: '/assets/images/food_13.jpg', title: 'Frites', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 4.0, cals: 150 },
            { image: '/assets/images/food_14.jpg', title: 'Pâte blanche', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 5, cals: 194},
            { image: '/assets/images/food_15.jpg', title: 'Brochettes', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 2.8, cals: 432 },
        ];
        setRecipe(data.slice(0, 6));
    }, []);
 
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
            <Row_card card={card}/>
        </div>
        <div className="container py-5">
            <h1>Blog</h1>
            <p className='brown fs-5 fw-bold text-end pb-5 pt-0'>Voir plus</p>
            <Blog_row />
        </div>
        <div className="container pb-5">
            <h1>Explorez les recettes</h1>
            <p className='brown fs-5 fw-bold text-end pb-5 pt-0'>Voir plus</p>
            <Row_card card={recipe}/>
        </div>
    </>
    )
}

export default Home
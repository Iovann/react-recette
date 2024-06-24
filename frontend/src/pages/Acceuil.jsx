import React, { useEffect, useState } from 'react';
import NavbarProfile from '../components/NavbarProfile';
import Share from '../components/share';
import Row_card from '../components/row_card';
import Blog_row from '../components/blog_row';
import Popular_row from '../components/popular_row';
import { dataCategorie, dataRecipe, dataCard } from '../common/data';
import Footer from '../components/footer';
import axios from 'axios';
import HeroAcceuil from '../components/HeroAcceuil';

const Acceuil = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [card, setCard] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [categorie, setCategorie] = useState([]);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('access');
                if (!token) {
                    throw new Error("Token not found");
                }

                const response = await axios.get('http://localhost:8000/api/user/profile/', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setProfile(response.data);
            } catch (error) {
                setError('Erreur de récupération du profil');
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
        setCard(dataCard.slice(0, 6));
        setRecipe(dataRecipe.slice(0, 6));
        setCategorie(dataCategorie.slice(0, 8));
    }, []);
    
    const dataConstructor = (profile) =>{
        const data = {
            id: profile.user.id,
            nom: profile.user.first_name,
            prenom: profile.user.last_name,
            email: profile.user.email,
            avatar: profile.avatar,
            tel: profile.phone_number
        }
        return data
    }
    
    let data = null;
    if (profile) {
        data = dataConstructor(profile);
    }

    if (loading) {
        return <div>Chargement...</div>;
    }
    
    if (error) {
        return <div>{error}</div>;
    }
    const fullname = `${data.nom} ${data.prenom}`;
    
    return (
        <>
            <div id=''>
                <NavbarProfile name={fullname}/>
                <HeroAcceuil infos={profile.user.last_name}/>
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
    );
}

export default Acceuil;
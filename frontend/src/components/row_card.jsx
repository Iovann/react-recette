import React, { useState, useEffect } from 'react';
import Recipe_card from './recipe_card';

const Row_card = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        const data = [
            { image: '/assets/images/food_5.jpg', title: 'Voandzou', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 2.9, cals: 534 },
            { image: '/assets/images/food_2.jpg', title: 'Salade', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 3, cals: 100 },
            { image: '/assets/images/food_3.jpg', title: 'Spaghetti', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 4.9, cals: 237 },
            { image: '/assets/images/food_6.jpg', title: 'Riz', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 4, cals: 150 },
            { image: '/assets/images/food_9.jpg', title: 'Vermicelle', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 3.5, cals: 134 },
            { image: '/assets/images/food_7.jpg', title: 'Pâte Noire', name: 'Alex MARTIN', avatar: "/assets/icons/avatar.jpg", count: 5, cals: 432 },
        ];
        setCard(data.slice(0, 6));
    }, []);

    return (
        <div className="container">
            <div className="row gx-5">
                {card.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 my-3">
                        <Recipe_card image={item.image} title={item.title} name={item.name} avatar={item.avatar} count={item.count} cals={item.cals}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Row_card;







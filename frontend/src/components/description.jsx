import React, { useState } from 'react';

const Description = () => {
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    return (
        <div>
            <div className="border-bottom border-2 border-brown">
                <label htmlFor="recipeDescription" className="form-label fw-bold fs-4 text-black">Description de la recette</label>
                <textarea
                    id="recipeDescription"
                    className="form-control form-control-lg border-0 out rounded-2"
                    value={description}
                    onChange={handleDescriptionChange}
                    maxLength="250"
                    rows="1"
                    placeholder='Décrivez la recette'
                ></textarea>
            </div>
            <p className="text-end mb-3"><small className="text-muted">{description.length}/250</small></p>
        </div>
    );
};

export default Description;
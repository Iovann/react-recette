import React, { useState } from 'react'
import NavbarProfile from '../components/NavbarProfile';
import Footer from '../components/footer';
import FileButton from '../components/FileBouton';
import Description from '../components/description';
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineAddAPhoto } from "react-icons/md";

const CreateRecipe = () => {
    const [ingredients, setIngredients] = useState(['']);
    const [items, setItems] = useState([{ photo: null, instructions: '' }]);

    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = event.target.value;
        setIngredients(newIngredients);
    };

    const handleRemoveIngredient = (index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted ingredients:', ingredients);
        // Vous pouvez ajouter votre logique de soumission ici (ex. envoyer les données à une API)
    };


    const handleAddItem = () => {
        setItems([...items, { photo: null, instructions: '' }]);
    };

    const handleRemoveItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const handlePhotoChange = (index, event) => {
        const newItems = [...items];
        const newPhoto = event.target.files[0];
        if (newPhoto) {
            const reader = new FileReader();
            reader.onloadend = () => {
                newItems[index].photo = reader.result;
                setItems(newItems);
            };
            reader.readAsDataURL(newPhoto);
        }
    };

    const handleInstructionsChange = (index, event) => {
        const newItems = [...items];
        newItems[index].instructions = event.target.value;
        setItems(newItems);
    };



    return (
        <>
            <NavbarProfile />
            <div className="container">
                <hr />
                <div className='row justify-content-between align-items-center'>
                    <div className="col-8">
                        <p className='fw-bold display-6 mb-0'>Créer une recette</p>
                    </div>
                    <div className="col-4 text-end">
                        <button className='btn bg-brown text-capitalize mb-0 text-white fw-bolder'>Enregistrer</button>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-lg-6 pb-5">
                        <div className="mb-3 border-bottom border-brown border-2">
                            <label htmlFor="title" className="form-label fw-bold fs-4 text-black">Nom de la recette:</label>
                            <input type="text out border-0" className="form-control form-control-outline" id="title" placeholder="Nom de la recette" />
                        </div>
                        <FileButton className="mx-4 mb-3 my-1" />
                        <Description />
                        <h3 className='fw-bold'>Ingrédients:</h3>
                        {ingredients.map((ingredient, index) => (
                            <div key={index} className="ingredient-input border-bottom border-3 border-brown input-group mb-3">
                                <input
                                    className='form-control out border-0'
                                    type="text"
                                    value={ingredient}
                                    onChange={(event) => handleChange(index, event)}
                                    placeholder={`Ingrédient ${index + 1}`}
                                />
                                <button type="button" className='btn btn-light' onClick={() => handleRemoveIngredient(index)}><MdDelete size={25} color='#B55D51' /></button>
                            </div>
                        ))}
                        <button type="button" className='btn btn-light' onClick={handleAddIngredient}><IoIosAddCircleOutline MdDelete size={30} color='#B55D51' /></button>

                        <h3 className='fw-bold mt-5 mb-2'>Instructions:</h3>
                        {items.map((item, index) => (
                            <div key={index} className="item-input">
                                <h4>Etape {index + 1}</h4>
                                <div className="photo-container photo mb-2">
                                    {item.photo ? (
                                        <img src={item.photo} onClick={() => document.getElementById(`photo-input-${index}`).click()} alt={`Photo ${index + 1}`} className="photo" />
                                    ) : (
                                        <div className='bg-secondary-subtle rounded-3 photo my-2 mx-1 align-items-center row justify-content-center fw-bold' onClick={() => document.getElementById(`photo-input-${index}`).click()}>
                                            <MdOutlineAddAPhoto size={30} className='mt-3' />
                                            <p className='text-center'>Ajouter</p>
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        id={`photo-input-${index}`}
                                        onChange={(event) => handlePhotoChange(index, event)}
                                        style={{ display: 'none' }}
                                    />
                                </div>
                                <div className="input-group border-bottom border-3 border-brown mb-3">
                                    <textarea
                                        value={item.instructions}
                                        onChange={(event) => handleInstructionsChange(index, event)}
                                        placeholder=""
                                        rows="3"
                                        className="form-control form-control-lg text-height out border-0"
                                        aria-label="With textarea"
                                    ></textarea>
                                    <button type="button" className='btn btn-light input-group-text' onClick={() => handleRemoveItem(index)}><MdDelete size={25} color='#B55D51' /></button>
                                </div>
                            </div>
                        ))}
                        <button type="button" className='btn btn-light' onClick={handleAddItem}><IoIosAddCircleOutline  size={30} color='#B55D51' /></button>


                        <div className="my-3">
                            <label htmlFor="portion" className="form-label fw-bold fs-4 text-black">Portion</label>
                            <input type="text" className="form-control" id="portion" placeholder="Cette recette nourira combien de personne?" />
                        </div>

                        <div className="my-3">
                            <label htmlFor="prep" className="form-label fw-bold fs-4 text-black">Temps de preparation</label>
                            <input type="text" className="form-control" id="prep" placeholder="Temps de préparation" />
                        </div>

                        <div className="my-3">
                            <label htmlFor="cuisson" className="form-label fw-bold fs-4 text-black">Temps de cuisson</label>
                            <input type="text" className="form-control" id="cuisson" placeholder="Temps de cuisson" />
                        </div>

                        <div className="my-3">
                            <label htmlFor="cuisine" className="form-label fw-bold fs-4 text-black">Cuisine</label>
                            <select className="form-select" aria-label="Default select example" id='cuisine'>
                                <option selected>---------------</option>
                                <option value="1">Africaine</option>
                                <option value="2">Européenne</option>
                                <option value="3">Americaine</option>
                                <option value="4">Italienne</option>
                            </select>
                        </div>

                        <div className="my-3">
                            <label htmlFor="categorie" className="form-label fw-bold fs-4 text-black">Catégorie</label>
                            <select className="form-select" aria-label="Default select example" id='categorie'>
                                <option selected>---------------</option>
                                <option value="1">Petit Déjeuner</option>
                                <option value="2">Fast Food</option>
                                <option value="3">Dîner</option>
                                <option value="4">Casse croute</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default CreateRecipe

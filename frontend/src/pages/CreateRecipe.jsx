import React, { useState, useRef } from 'react'
import NavbarProfile from '../components/NavbarProfile';
import Footer from '../components/footer';
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineAddAPhoto } from "react-icons/md";
import axios from 'axios';


const CreateRecipe = () => {
    const fileInputRef = useRef(null);
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [items, setItems] = useState([{ photo: null, instructions: '' }]);
    const [title, setTitle] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [servings, setServings] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [category, setCategory] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

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

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handlePrepTimeChange = (event) => {
        setPrepTime(event.target.value);
    };

    const handleCookTimeChange = (event) => {
        setCookTime(event.target.value);
    };

    const handleServingsChange = (event) => {
        setServings(event.target.value);
    };

    const handleCuisineChange = (event) => {
        setCuisine(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('ingredients', ingredients.join(','));
        formData.append('prep_time', prepTime);
        formData.append('cook_time', cookTime);
        formData.append('servings', servings);
        if (photo) {
            formData.append('photo', dataURLtoFile(photo, 'recipe-photo.jpg'));
        }
    
        try {
            const token = localStorage.access;
            console.log(token)
            const recipeResponse = await axios.post('http://127.0.0.1:8000/api/recipes/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
    
            const recipeId = recipeResponse.data.id; // Récupération de l'ID de la recette
            console.log(recipeId)
            const steps = items.map((item, index) => {
                const stepFormData = new FormData();
                stepFormData.append('recipe', recipeId); // Ajout de l'ID de la recette
                stepFormData.append('step_number', index + 1);
                stepFormData.append('description', item.instructions);
                if (item.photo) {
                    stepFormData.append('photo', dataURLtoFile(item.photo, `step-photo-${index}.jpg`));
                }
                return stepFormData;
            });
    
            for (const stepFormData of steps) {
                await axios.post('http://127.0.0.1:8000/api/steps/', stepFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                });
            }
    
            console.log('Recipe submitted successfully');
            // Redirigez ou mettez à jour l'interface utilisateur selon les besoins
        } catch (error) {
            console.error('Error submitting recipe:', error.response ? error.response.data : error.message);
        }
    };
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const formData = new FormData();
    //     formData.append('title', title);
    //     formData.append('ingredients', ingredients.join(','));
    //     formData.append('prep_time', prepTime);
    //     formData.append('cook_time', cookTime);
    //     formData.append('servings', servings);
    //     if (photo) {
    //         formData.append('photo', dataURLtoFile(photo, 'recipe-photo.jpg'));
    //     }

    //     const steps = []; // Initialisation du tableau steps

    //     // Boucle forEach pour traiter chaque item
    //     items.forEach((item, index) => {
    //         // Création d'un objet step pour chaque item
    //         const step = {
    //             step_number: index + 1,
    //             description: item.instructions
    //         };
        
    //         // Ajout de la propriété photo si elle est présente
    //         if (item.photo) {
    //             step.photo = dataURLtoFile(item.photo, `step-photo-${index}.jpg`);
    //         }
        
    //         // Ajout de l'objet step au tableau steps
    //         steps.push({ [`steps[${index}]`]: step });
    //     });
    //     formData.append("steps", steps);

    //     try {
    //         const token = localStorage.access;
    //         const response = await axios.post('http://127.0.0.1:8000/api/recipes/', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
    //         console.log('Submitted recipe:', response.data);
    //         // Redirigez ou mettez à jour l'interface utilisateur selon les besoins
    //     } catch (error) {
    //         console.error('Error submitting recipe:', error.response ? error.response.data : error.message);
    //     }
    // };



    const dataURLtoFile = (dataurl, filename) => {
        const arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
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
                        <button className='btn bg-brown text-capitalize mb-0 text-white fw-bolder' onClick={handleSubmit}>Enregistrer</button>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-lg-6 pb-5">
                        <div className="mb-3 border-bottom border-brown border-2">
                            <label htmlFor="title" className="form-label fw-bold fs-4 text-black">Nom de la recette:</label>
                            <input type="text" className="form-control form-control-outline" id="title" placeholder="Nom de la recette" value={title} onChange={handleTitleChange} />
                        </div>

                        <div className="mx-4 mb-3 my-1" >
                            <label htmlFor="recipeimage" className="form-label fw-bold fs-4 text-black">Image de la recette</label>
                            <div style={{ minHeight: "250px" }} className='bg-secondary-subtle' id='recipeimage'>
                                {imageUrl && (
                                    <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
                                )}
                            </div>
                            <div className='bg-secondary-subtle rounded-3 photo my-2 mx-1 align-items-center row justify-content-center fw-bold' onClick={handleButtonClick}>
                                <MdOutlineAddAPhoto size={30} className='mt-3' />
                                <p className='text-center'>Ajouter</p>
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </div>
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
                        <button type="button" className='btn btn-light' onClick={handleAddIngredient}><IoIosAddCircleOutline size={30} color='#B55D51' /></button>

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
                        <button type="button" className='btn btn-light' onClick={handleAddItem}><IoIosAddCircleOutline size={30} color='#B55D51' /></button>


                        <div className="my-3">
                            <label htmlFor="portion" className="form-label fw-bold fs-4 text-black">Portion</label>
                            <input type="text" className="form-control" id="portion" placeholder="Cette recette nourira combien de personne?" value={servings} onChange={handleServingsChange} />
                        </div>

                        <div className="my-3">
                            <label htmlFor="prep" className="form-label fw-bold fs-4 text-black">Temps de préparation</label>
                            <input type="text" className="form-control" id="prep" placeholder="Temps de préparation" value={prepTime} onChange={handlePrepTimeChange} />
                        </div>

                        <div className="my-3">
                            <label htmlFor="cuisson" className="form-label fw-bold fs-4 text-black">Temps de cuisson</label>
                            <input type="text" className="form-control" id="cuisson" placeholder="Temps de cuisson" value={cookTime} onChange={handleCookTimeChange} />
                        </div>

                        <div className="my-3">
                            <label htmlFor="cuisine" className="form-label fw-bold fs-4 text-black">Cuisine</label>
                            <select className="form-select" aria-label="Default select example" id='cuisine' value={cuisine} onChange={handleCuisineChange}>
                                <option value="">---------------</option>
                                <option value="Africaine">Africaine</option>
                                <option value="Européenne">Européenne</option>
                                <option value="Américaine">Américaine</option>
                                <option value="Italienne">Italienne</option>
                            </select>
                        </div>

                        <div className="my-3">
                            <label htmlFor="categorie" className="form-label fw-bold fs-4 text-black">Catégorie</label>
                            <select className="form-select" aria-label="Default select example" id='categorie' value={category} onChange={handleCategoryChange}>
                                <option value="">---------------</option>
                                <option value="Petit Déjeuner">Petit Déjeuner</option>
                                <option value="Fast Food">Fast Food</option>
                                <option value="Dîner">Dîner</option>
                                <option value="Casse-croute">Casse-croute</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default CreateRecipe

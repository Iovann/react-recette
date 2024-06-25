import React, { useRef, useState } from 'react';
import { MdOutlineAddAPhoto } from "react-icons/md";


const FileButton = () => {
    const fileInputRef = useRef(null);
    const [imageUrl, setImageUrl] = useState(null);

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

    return (
        <div>
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
    );
};

export default FileButton;
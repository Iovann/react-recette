import React from 'react'

const Popular = ({ image, title }) => {
    return (
        <>
            <img src={image} className='rounded-circle img-fluid mb-3' alt="image de categorie" />
            <p className='text-center fw-bold fs-5'>{title}</p>
        </>
    )
}

export default Popular

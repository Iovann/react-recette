import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-xl mb-5 shadow-none">
            <div className="container">
                <a className="navbar-brand align-items-center">
                    <img src="/assets/icons/logo.svg" className='img-fluid' alt="" />
                    <span className='fw-bolder'>Cuisto<span style={{color:"#974344"}}>Recettes</span> </span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-xl-flex justify-content-evenly" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 fw-bold">
                        <li className="nav-item mx-1">
                            <a className="nav-link active" aria-current="page" href="#">Acceuil</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link" href="#">Recette</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link">Ajouter une Recette</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link">A propos</a>
                        </li>
                    </ul>

                    <div className='d-flex justify-content-xl-between'>
                        <MDBBtn className='mx-1 fw-bold text-capitalize' color='light' rippleColor='dark' style={{ backgroundColor: '#EBEBEB' }}>Connexion</MDBBtn>
                        <MDBBtn className='mx-1 fw-bold text-capitalize text-white' color='white' rippleColor='light' style={{ backgroundColor: '#B55D51' }} >Inscription</MDBBtn>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

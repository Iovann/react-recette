import React from 'react'
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Inscription = () => {
  initMDB({ Input, Ripple });
  return (
    <div className="container">
      <div className='row justify-content-center align-items-center vh-100'>
        <div className="col-lg-5 shadow-lg px-4 py-5 rounded-5">
          <Link to="/" className='fw-semibold text-black text-decoration-none'> <MdOutlineArrowBackIosNew size={20} className='mx-2' />Retour a l'Acceuil</Link>
          <h2 className='text-center my-4'>Connexion</h2>
          <form>
            <div className="form-outline mb-4 border-bottom border-2 border-brown">
              <input type="email" id="form3Example3" className="form-control" />
              <label className="form-label" htmlFor="form3Example3">Email</label>
            </div>

            <div className="form-outline mb-4 border-bottom border-2 border-brown">
              <input type="password" id="form3Example4" className="form-control out" />
              <label className="form-label" htmlFor="form3Example4">Mot de passe</label>
            </div>

            <button data-mdb-ripple-init type="button" className="btn bg-brown text-white fw-bold btn-block mb-4">S'inscrire</button>

            <div className="">
              <p className='text-center'>Vous pouvez également vous connectez avec:</p>
              <div className="row gx-2">
                <div className="col-lg-6">
                  <button data-mdb-ripple-init type="button" className="btn btn-secondary-subtle btn-block rounded-pill btn-floating py-2 text-start d-flex align-items-center">
                    <FcGoogle className='mx-2 ' size={30} />
                    <span className='text-capitalize'>S'inscrire <span className="text-lowercase">avec </span>Google</span>
                  </button>
                </div>
                <div className="col-lg-6">
                  <button data-mdb-ripple-init type="button" className="btn btn-secondary-subtle btn-block rounded-pill btn-floating py-2 text-start d-flex align-items-center">
                    <FaFacebookSquare className='mx-2' size={30} color='blue' />
                    <span className='text-capitalize'>S'inscrire <span className="text-lowercase">avec </span>Facebook</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Inscription
import React, { useState } from 'react';
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import api from "../api";
import Loading from '../components/Loading';


const Inscription = () => {
  initMDB({ Input, Ripple });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      user: {
        username: email,
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
      },
      phone_number: phoneNumber,
    };

    try {
      const res = await api.post('api/user/', data, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      navigate("/connexion");
    } catch (error) {
      if (error.response && error.response.data) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className='row justify-content-center align-items-center vh-100'>
        <div className="col-lg-5 shadow-lg px-4 py-5 rounded-5">
          <Link to="/" className='fw-semibold text-black text-decoration-none'> 
            <MdOutlineArrowBackIosNew size={20} className='mx-2' />Retour a l'Acceuil
          </Link>
          <h2 className='text-center my-4'>Rejoignez notre Communauté</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-4 gx-3">
              <div className="col-6">
                <div className="form-outline border-bottom border-2 border-brown">
                  <input 
                    type="text" 
                    id="form3Example1" 
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example1">Nom</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline border-bottom border-2 border-brown">
                  <input 
                    type="text" 
                    id="form3Example2" 
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example2">Prénom</label>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4 border-bottom border-2 border-brown">
              <input 
                type="email" 
                id="form3Example3" 
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label" htmlFor="form3Example3">Email</label>
            </div>

            <div className="form-outline mb-4 border-bottom border-2 border-brown">
              <input 
                type="tel" 
                id="form6Example6" 
                className="form-control"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label className="form-label" htmlFor="form6Example6">Téléphone</label>
            </div>

            <div className="form-outline mb-4 border-bottom border-2 border-brown">
              <input 
                type="password" 
                id="form3Example4" 
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="form-label" htmlFor="form3Example4">Mot de passe</label>
            </div>

            <button 
              data-mdb-ripple-init 
              type="submit" 
              className="btn bg-brown text-white fw-bold btn-block mb-4"
            >
              S'inscrire
            </button>
            {loading && <Loading />}

            <div className="">
              <p className='text-center'>Vous pouvez également rejoindre avec:</p>
              <div className="row gx-2">
                <div className="col-lg-6">
                  <button 
                    data-mdb-ripple-init 
                    type="button" 
                    className="btn btn-secondary-subtle btn-block rounded-pill btn-floating py-2 text-start d-flex align-items-center"
                  >
                    <FcGoogle className='mx-2 ' size={30} />
                    <span className='text-capitalize'>S'inscrire <span className="text-lowercase">avec </span>Google</span>
                  </button>
                </div>
                <div className="col-lg-6">
                  <button 
                    data-mdb-ripple-init 
                    type="button" 
                    className="btn btn-secondary-subtle btn-block rounded-pill btn-floating py-2 text-start d-flex align-items-center"
                  >
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
  );
}

export default Inscription;
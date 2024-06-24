import React, { useState } from 'react';
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import Loading from '../components/Loading';
// import GoogleLoginButton from '../components/GoogleLogin';

const Connexion = () => {
  initMDB({ Input, Ripple });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem(ACCESS_TOKEN, data.access);
        localStorage.setItem(REFRESH_TOKEN, data.refresh);
        navigate("/user");
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error('Error:', error);
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
          <h2 className='text-center my-4'>Connexion</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4 border-bottom border-2 border-brown">
              <input
                type="text"
                id="form3Example3"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="form-label" htmlFor="form3Example3">Email</label>
            </div>

            <div className="form-outline mb-4 border-bottom border-2 border-brown">
              <input
                type="password"
                id="form3Example4"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="form-label" htmlFor="form3Example4">Mot de passe</label>
            </div>

            <button type="submit" className="btn bg-brown text-white fw-bold btn-block mb-4">
              Connexion
            </button>

            {loading && <Loading />}

            <div className="text-center">
              <p className='text-center'>Vous pouvez également vous connectez avec:</p>
              {/* <GoogleLoginButton /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
import React from 'react'
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import { FcGoogle } from "react-icons/fc";
import '../index.css'

const Inscription = () => {
  initMDB({ Input, Ripple });
  return (
    <div className='row justify-content-center align-items-center vh-100'>
      <div className="col-lg-3">
        <form>
          <div className="row mb-4 gx-3">
            <div className="col-6">
              <div data-mdb-input-init className="form-outline border-bottom border-2 border-brown">
                <input type="text" id="form3Example1" className="form-control" />
                <label className="form-label" htmlFor="form3Example1">First name</label>
              </div>
            </div>
            <div className="col-6">
              <div data-mdb-input-init className="form-outline border-bottom border-2 border-brown">
                <input type="text" id="form3Example2" className="form-control" />
                <label className="form-label" htmlFor="form3Example2">Last name</label>
              </div>
            </div>
          </div>

          <div data-mdb-input-init className="form-outline mb-4 border-bottom border-2 border-brown">
            <input type="email" id="form3Example3" className="form-control" />
            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>

          <div data-mdb-input-init className="form-outline mb-4 border-bottom border-2 border-brown">
            <input type="tel" id="form6Example6" className="form-control" />
            <label className="form-label" htmlFor="form6Example6">Phone Number</label>
          </div>

          <div data-mdb-input-init className="form-outline mb-4 border-bottom border-2 border-brown">
            <input type="password" id="form3Example4" className="form-control out" />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>

          <button data-mdb-ripple-init type="button" className="btn bg-brown text-white fw-bold btn-block mb-4">Sign up</button>

          <div className="">
            <p className='text-center'>Vous pouvez également rejoindre avec:</p>
            <button data-mdb-ripple-init type="button" className="btn btn-secondary-subtle btn-block rounded-pill btn-floating py-2 text-start d-flex align-items-center">
              <FcGoogle className='mx-2 ' size={30} />
              <span className='fs-4  text-capitalize'>S'inscrire <span className="text-lowercase">avec </span>Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Inscription

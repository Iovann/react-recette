import { ImFire } from "react-icons/im";
import React from 'react'
import Star from './star'
const Recipe_card = ({ image, count, title, avatar, name, cals }) => {
    return (
        <div>
            <div className="card">
                <img src={image}className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="d-flex justify-content-between align-items-center">
                        <Star count={count} />
                        <span className="fw-bold">{count}</span>
                    </p>
                    <h5 className="card-title mt-2">{title}</h5>
                    <div className="card-text d-flex justify-content-between align-items-center">
                        <span className='fw-semibold'><img src={avatar} className='rounded-circle img-fluid me-3' style={{ width: '20%' }} alt="" />{name}</span>
                        <span className='p-1 border border-1 rounded-2 border-warning'> <ImFire color="red" className="mb-1" /> <span className="">{cals} cals</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe_card

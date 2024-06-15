import React from 'react'
import Star from './star'
const Card_horiz = ({lien, count, text, price}) => {
    return (
        <div className=''>
            <div className="row py-2 justify-content-between align-items-center rounded-4 shadow-lg bg-white" style={{marginTop: ""}}>
                <div className="col-3">
                    <img src={lien} alt="" className="rounded-2" />
                </div>
                <div className="col-7">
                    <p className="fw-bolder mb-1">{text}</p>
                    <p className="mb-1"><Star count={count} /></p>
                    <p className="mb-2"><span className="text-danger fw-bolder">$</span>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card_horiz

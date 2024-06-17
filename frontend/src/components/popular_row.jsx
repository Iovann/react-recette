import React from 'react'
import Popular from './popular'

const Popular_row = ({pop}) => {
    return (
        <div class="container">
            <div class="row justify-content-center">
            {pop.map((item, index) => (
                    <div key={index} className="col-lg-3 col-6 text-center mt-4">
                        <Popular image={item.image} title={item.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Popular_row

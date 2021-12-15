import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { image, name } = service;
    return (
        <div className="col service-section">
            <div className="card service-image">
                <div>
                    <img src={image} className="card-img-center text-center" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import './SingleUser.css';

const SingleUser = ({ user }) => {
    const { name, description, image } = user;
    return (
        <div className="col d-flex justify-content-between align-items-center single-image">
            <div className=''>
                <input type="checkbox" />
                <img src={image} className="card-img-top ms-4" alt="..." />
            </div>
            <p className="card-title d-flex align-items-center">{name}</p>
            <p className="card-text">{description}</p>
        </div>
    );
};

export default SingleUser;
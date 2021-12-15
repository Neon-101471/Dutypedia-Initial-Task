import React from 'react';
import './SingleUser.css';

const SingleUser = ({ user }) => {
    const { name, description, image } = user;
    return (
        <div className="col d-flex justify-content-between align-items-center single-image">
            <div className='select-all d-flex justify-content-'>
                <input placeholder='Select All' type="checkbox" />
                <img src={image} className="card-img-top" alt="..." />
                <p className="card-title d-flex align-items-center">{name}</p>
            </div>
            <p className="card-text">{description}</p>
        </div>
    );
};

export default SingleUser;
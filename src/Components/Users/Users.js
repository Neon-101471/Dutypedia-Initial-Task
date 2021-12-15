import React, { useState, useEffect } from 'react';
import SingleUser from '../SingleUser/SingleUser';
import './Users.css';

const Users = () => {
    const [userCollection, setUsersCollection] = useState([]);

    useEffect(() => {
        fetch('./usersCollection.json')
            .then(res => res.json())
            .then(data => setUsersCollection(data))
    }, [])
    return (
        <div className='p-2'>
            {/* Back section */}
            <div className='d-flex justify-content-start my-3'>
                <p><i className="fas fa-arrow-left me-2"></i> Back</p> <br />
            </div>
            <div className='mx-3 my-4'>
                <div className='d-flex justify-content-start'>
                    <p className='users'><span className='dutypedia-user me-2'>Dutypedia Users</span> | <span className='offline-user ms-2'>Offline User</span></p>
                </div>

                {/* Search field */}
                <div className='row my-3'>
                    <div className="input-group">
                        <input type="text" className="form-control search-input" aria-label="Text input with segmented dropdown button" placeholder='Search Now' />
                        <button type="button" className="btn btn-outline-secondary"><i className="fas fa-search"></i></button>

                        <p className='btn-area'><button className='ms-4 px-4 student-btn'><i className="fas fa-user-plus"></i> Add </button></p>
                    </div>
                </div>
            </div>

            {/* Users selection heading */}
            <div className="row row-cols-1 row-cols-md-1 px-2 py-3 mx-3 my-2 user-selection">
                <div className="col d-flex justify-content-between">
                    <div className='select-all d-flex align-items-center'> <input placeholder='Select All' type="checkbox" /> <span className='ps-2'>Select All</span></div>
                    <span>Role</span>
                    <span>Select 5 Person</span>
                </div>
            </div>

            {/* Users collection */}
            <div className="row row-cols-1 row-cols-md-1 gy-4 users-container">
                {
                    userCollection.map(user => <SingleUser
                        key={user.id}
                        user={user}
                    ></SingleUser> )
                }
            </div>
        </div>
    );
};

export default Users;
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Users from '../Users/Users';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='home-container'>

            {/* Sidebar section starts here */}
            <div className='sidebar-section px-3'>
                <div>
                    <p><img src="https://i.ibb.co/tqnnRjW/person-with-laptop-male-1597386-1354342.png" alt="" className='img-fluid pt-2' /></p>
                    <span className='mt-2'>Md Masud Reja</span> <br />
                    <span className=''>Teacher</span>
                </div>
                <div className='mt-5'>
                    <p className='d-flex justify-content-between'><span><i className="fas fa-users"></i> Home</span></p>
                    <p className='d-flex justify-content-between'><span><i className="fas fa-users"></i> Services</span><span><i className="fas fa-minus"></i></span></p>
                    <div>
                        <p className='d-flex justify-content-between ms-4'><span> Member</span><span><i className="fas fa-plus"></i></span></p>
                        <ul className='member-section'>
                            <li>All Member</li>
                            <li>Add Member</li>
                            <li>Delate Member</li>
                        </ul>
                    </div>
                    <div>
                        <p className='d-flex justify-content-between'><span><i className="fas fa-users"></i> Group</span><span><i className="fas fa-plus"></i></span></p>
                        <ul className='group-section'>
                            <li>Create Group</li>
                            <li>Create Group</li>
                        </ul>
                    </div>
                    <p className='d-flex justify-content-between ms-4'><span> Notice</span><span><i className="fas fa-plus"></i></span></p>
                    <p className='d-flex justify-content-between ms-4'><span> Staff & Partner</span><span><i className="fas fa-plus"></i></span></p>
                    <p className='d-flex justify-content-between ms-4'><span> Expencess</span><span><i className="fas fa-plus"></i></span></p>
                    <p className='d-flex justify-content-between ms-4'><span> Account Balence</span><span><i className="fas fa-plus"></i></span></p>
                    <p className='d-flex justify-content-between ms-4'><span> Customer Review</span><span><i className="fas fa-minus"></i></span></p>
                    <p className='d-flex justify-content-between ms-4'><span> Expences</span><span><i className="fas fa-plus"></i></span></p>
                </div>
            </div>
            {/* Sidebar section close here */}


            {/* Main body */}
            <div className='body-section'>
                <div className='second-body'>
                    <h2 className='mb-4'>Rasel Academy</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            services.map(service => <Service
                                service={service}
                                key={service.id}
                            ></Service>)
                        }
                    </div>
                    <Users />
                </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import './Team.css';

const Team = () => {

    return (
        <div className=' mb-5 mt-3 team-container'>
            <div className=' team-staff'>
                <div>
                    <img className='team-img' src='' alt="" />
                </div>
                <div>
                    <h3>Jogn Smith</h3>
                    <h6 className='team-designation'>Software Developer</h6>
                    <p className='team-text'>Build website or web app with HTML, CSS, BOOTSTRAP, TAILWIND, JAVASCRIPT, REACT JS, MONGODB..
                    </p>
                </div>
            </div>
            <div className=' team-staff'>
                <div>
                    <img className='team-img' src='' alt="" />
                </div>
                <div>
                    <h3>Robert Miler</h3>
                    <h6 className='team-designation'>Inventory Manger</h6>
                    <p className='team-text'>Bachelor of commerce with Honours in Accounting. Experiences in website and app development as well as digital product management. </p>
                </div>
            </div>
        </div>
    );
};

export default Team;
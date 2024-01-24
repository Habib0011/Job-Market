import React from 'react';
import './Job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    return (
        <div className='job'>
            <img src={logo} alt="" />
            <h3>{job_title}</h3>
            <small className='company-name'>{company_name}</small>
            <div className='job-btn'>
                <button className='job-type'>{remote_or_onsite}</button>
                <button className='job-type'>{job_type}</button>
            </div>
            <div className='location-ammount'>
            <span>
                <FontAwesomeIcon icon={faLocationDot} /> <small>{location}</small>
            </span>
            <span>
            <FontAwesomeIcon icon={faMoneyBill} /> <small>{salary}</small>
            </span>
            </div>
           <Link to={`/home/${id}`}> 
      <button className='btn-details'>View Details</button>
            </Link>
        </div>
    );
};

export default Job;
import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import './Jobs.css'
import { Link } from 'react-router-dom';

const Jobs = () => {
    const [jobs,setjobs] = useState([]);
    console.log(jobs)
    
    useEffect(()=>{
        fetch('jobs.json')
        .then(res =>res.json())
        .then(data => setjobs(data))
    }, [])
  
    return (
        <div className='jobs'>
            {
                jobs.map(job => 
                <Job key= {job.id}
                job={job}
                >
                </Job>)
            }
         
        </div>
    );
};

export default Jobs;
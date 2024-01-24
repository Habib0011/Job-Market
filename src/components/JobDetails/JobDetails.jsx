import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobDetails = useLoaderData()
    console.log(jobDetails)
    const [jobs, setjobs] = useState([]);
    useEffect(()=>{
        fetch(`jobs.json`)
        .then(res => res.json())
        .then(data => setjobs(data))
    },[])
  
    // const {job_description,job_responsibility,educational_requirements,experiences,contact_information,salary,job_title} = jobDetails;
    return (
        <div>
            {
                jobs.map(job =>console.log(job))
            }
            <div>
                <div className='job-info'> 
               <p>
                {jobDetails.job_description}
               </p>

                </div>

                <div>

                </div>
            </div>
            <h2>job details</h2>
        </div>
    );
};

export default JobDetails;
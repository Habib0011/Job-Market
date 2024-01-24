import React from 'react';
import './Home.css'
import img from '../../assets/images/user.png'
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    const categories = useLoaderData()
    // console.log(categories)
    return (
        <div >
            <div className='background'>
            <div className='banner-text'>
                <div>
                <h1>
                One Step Closer To Your <span className='dream-job'>Dream Job</span>
                </h1>
                <p>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className='btn-header'>
                    Get Start
                </button>
                </div>
            </div>
            <div className='user-img'>
                <img src={img} alt="" />
            </div>
            </div>
               <div>
                   <h2> Job Category List</h2>
                   <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
               </div>
             <div className='single-category'>
                {
                    categories.map(category => 
                    <Category
                    key={category.id}
                    category={category}
                    >
                    </Category>)
                }
             </div>
             <div>
                <h2>Featured Jobs</h2>
                <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
             </div>
             <div>
              <Jobs></Jobs>
              {/* <button className='btn-header'>View All</button> */}
             </div>
        </div>
    );
};

export default Home;
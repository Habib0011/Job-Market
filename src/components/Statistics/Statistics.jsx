import React from 'react';
import './Statistics.css';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
          name: 'Assignment 1',
           marks: 50,
        },
        {
          name: 'Assignment 2',
           marks: 51,
          
        },
        {
          name: 'Assignment 3',
           marks:  60,
         
        },
        {
          name: 'Assignment 4',
           marks:  55,
         
        },
        {
          name: 'Assignment 5',
           marks: 50,
        
        },
        {
          name: 'Assignment 6',
           marks: 52,
        
        },
        {
          name: 'Assignment 7',
          marks: 60,
          
        },
      ];
      
    return (
        <div className='chart'>
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="marks" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
    
        </div>
    );
};

export default Statistics;
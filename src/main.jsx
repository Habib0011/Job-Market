import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import Blog from './components/Blog/Blog.jsx';
import Statistics from './components/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'home',
        element:<Home></Home>,
        loader:()=>fetch("categories.json")
      },
      {
        path:'home/:JobsId',
        element:<JobDetails></JobDetails>,
        loader:({params}) => fetch(`jobs.json/${params.JobsId}`)
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'*',
        element: <div><h2>404 page not found</h2></div>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import { useDispatch } from 'react-redux';

const Body = () => {
   const dispatch = useDispatch();

   const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    },
   ])

   

  return (
    <div className=''>
        {/* before adding routing
      <Login />
      <Browse /> */}

      <RouterProvider router={appRouter} />

      

    </div>
  )
}

export default Body
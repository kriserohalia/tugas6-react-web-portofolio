import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cv from './pages/Cv.jsx'
import Portofolio from './pages/Portofolio.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import "./index.css"

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/cv",
        element:<Cv/>,
      },
      {
        path:"/portofolio",
        element:<Portofolio/>,
      },

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);

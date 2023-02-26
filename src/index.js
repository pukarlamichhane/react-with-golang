import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import Errorpage from './component/Errorpage';
import Home from './component/Home';
import Movies from './component/Movies'
import Graphql from './component/Graphql';
import Login from './component/Login';
import Gemre from './component/Gemre';
import Manage from './component/Manage';
import Addmovies from './component/Addmovies';


const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Errorpage/>,
    children:[
      {index:true,element:<Home></Home>},
      {
        path:"/login",
        element:<Login></Login>
      },
    {
      path:"/movies",
      element:<Movies></Movies>
    },
    {
      path:"/genres",
      element:<Gemre></Gemre>
    },
    {
      path:"/admin/movies/0",
      element:<Addmovies></Addmovies>
    },
    {
      path:"/manage-catagoe",
      element:<Manage></Manage>
    },
    {
      path:"/graphql",
      element:<Graphql></Graphql>
    }

]

      
  }
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


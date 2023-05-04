import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Friends from './Components/Friends/Friends';
import FriendDetails from './Components/Friends/FriendDetails';
import Error from './Components/Error/Error';

function App() {

  const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>, 
    // Main এর children গুলো Outlet এর মধ্যে কাজ করছে.
    children:[
      {
        path:'/home', element:<Home></Home>
      }, 
      
      {
        path:'/about', element:<About></About>
        
      },
      {
        path:'/products', element: <Products></Products>
        
      },
      {
        path:'/friends', element:<Friends></Friends>,
        loader: async ()=> {
          return fetch ('https://jsonplaceholder.typicode.com/users')
        }
        
      },
      {
        path:'/friend/:friendId',
        element:<FriendDetails></FriendDetails>,
        loader: async ({params})=> {
          return fetch (`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        }
      }
    ]
   },
   {
    path:'*',
    element:<Error></Error>
   }

  ])
 

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Layout/Main';
import Inventory from './Components/Inventory/Inventory';
import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import { Products } from './Components/Products/Products';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/cart',
          loader: () => Products(),
          element: <Cart></Cart>
        },
        {
          path: '/about',
          element: <About></About>
        },
      ]

    },


  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;

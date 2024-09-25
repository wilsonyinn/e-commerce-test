import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import ItemPage from './ItemPage.jsx'
import ItemList from './ItemList.jsx'
import SignIn from './SignIn.jsx'
import ShoppingCart from './ShoppingCart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/itemPage",
    element: <ItemPage />
  },
  {
    path: "/itemList",
    element: <ItemList />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "shopping-cart",
    element: <ShoppingCart />
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './components/layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import InfoSection from './pages/InfoSection'
import Cart from './pages/Cart'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:'/home',
          element:<Home />
        },
        {
          path:'/info',
          element:<InfoSection />
        },
        {
          path:'/cart',
          element:<Cart />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App

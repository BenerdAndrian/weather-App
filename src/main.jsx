import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LandingPage } from './components/LandingPage.jsx'
import { LoadingPage } from './components/LoadingPage.jsx'
import { NavbarSection } from './components/Navbar.jsx'
import ParentComponent from './components/Weather.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { routes } from './routes.jsx'
import './styles/styles.css'
 const router=createBrowserRouter(routes)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

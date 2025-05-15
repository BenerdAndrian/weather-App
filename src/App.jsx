import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { Outlet } from 'react-router-dom';
import { createContext } from 'react';
import { DataProvider } from './components/DataContext';
import { NavbarSection } from './components/Navbar';
function App() {
  
 return(
  <>
  <div className="grid md:grid-cols-[80px_1fr] bg-black p-3">
    <div className="md:col-start-1 md:col-end-2">
    <NavbarSection/>
    </div>
    <div className="md:col-start-2 md:col-end-3">
    <DataProvider>
    <Outlet/>
    </DataProvider>
    </div>
  </div>
  </>
   
 )
}

export default App


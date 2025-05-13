import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { Outlet } from 'react-router-dom';
import { createContext } from 'react';
import { DataProvider } from './components/DataContext';
function App() {
 return(
  <>
  <DataProvider>
  <Outlet/>
  </DataProvider>

  </>
   
 )
}

export default App


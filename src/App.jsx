import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'


import DefaultLayout from './Layout/DefaultLayout'


import Contacts from './pages/Contacts'
import HomePage from './pages/HomePage'
import OurTypicProducts from './pages/OurTypicProduct'


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route element={<DefaultLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/OurTypicProduct' element={<OurTypicProducts/>}/>
            <Route path='/Chi Siamo' element={<Contacts/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}



import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home';




function Main() {
  return (
    <BrowserRouter>
    <div className='main'>
    <Routes>
          <Route path="/">
          <Route index element={<Home/>} />
          <Route path="details" element={<Details/>} />
          </Route>
        </Routes> 
    </div>
    </BrowserRouter>
  )
}

export default Main
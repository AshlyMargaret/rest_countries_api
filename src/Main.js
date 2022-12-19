import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function Main() {
  return (
    <BrowserRouter>
    <div className='main'>
    <Routes>
          <Route path="/">
          <Route index element={<Home/>} />
          <Route path="details/:name" element={<Details/>} />
          <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes> 
    </div>
    </BrowserRouter>
  )
}

export default Main
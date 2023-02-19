import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Content from "./Content/Content";
import Footer from "./Footer/Footer"

const Routing = () => {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/content" element={<Content />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        {/* <Route path="*" element={<h1>Page not found!!</h1>}></Route> */}
        <Route path="*" element={<Navigate to={"/banner"}/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Routing
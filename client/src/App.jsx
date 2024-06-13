import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
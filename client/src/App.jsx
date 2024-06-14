import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/view/:id" element={<Detail/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
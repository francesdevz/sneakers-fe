import Navbar from "./NavBar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../Pages/Home";

const Authenticated = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/"  element={<Home/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default Authenticated;

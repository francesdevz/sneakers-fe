import Navbar from "./NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../Pages/Home";

const Authenticated = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/"  element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Authenticated;

import React from "react";
import { 
    BrowserRouter, 
    Routes,
    Route,
} from "react-router-dom";

import Dashboard from "./screens/Dashboard";
import { Home } from "./screens/Home";
import { Register } from "./screens/Register";

const Routing = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/register" element={<Register/>}/>

            <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes> 
    </BrowserRouter>
   )
}

export default Routing;
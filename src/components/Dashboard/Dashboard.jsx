import React from 'react';
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Dashboard = () =>{
    return (
        <div style={{ width: "100%", margin: "0", padding: "0", overflowX: "hidden" }}>
            <Header />
            <Routes>
                {/* 🚀 FIX: Use 'element' and render the component as JSX (<Component />) */}
                {routes.map(route => {
                    return (
                        <Route 
                            key={route.name} 
                            path={route.path} 
                            element={<route.component />} // <-- CORRECTED LINE
                        />
                    );
                })}
            </Routes>
            <Footer/>
        </div>
    );
}

export default Dashboard;
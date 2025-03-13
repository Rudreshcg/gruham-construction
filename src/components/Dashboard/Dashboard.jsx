import Header from "../Header/Header"
// import '../Dashboard/Dashboard.css'
import Footer from "../Footer/Footer"
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Home from "../Home/Home";

const Dashboard = () =>{
    return   <div className="body">
        <Header />
        <Routes>
            {routes.map(route=>{
                return <Route key={route.name} path={route.path} Component={route.component}/>
            })}
        </Routes>
        <Footer/>
</div>
}

export default Dashboard;
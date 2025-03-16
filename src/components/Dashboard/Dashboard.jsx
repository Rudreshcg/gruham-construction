import Header from "../Header/Header"
// import '../Dashboard/Dashboard.css'
import Footer from "../Footer/Footer"
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const Dashboard = () =>{
    return   <div style={{ width: "100%", margin: "0", padding: "0", overflowX: "hidden" }}>
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
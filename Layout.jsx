import { Link, Outlet } from "react-router-dom"
import Topmenu from "./src/Topmenu";
import Footer from "./Pages/Footer";



const Layout=()=>{
    return(


        <>
        <Topmenu/>
        
        <Outlet/>
        <hr/>
        <Footer/>
      
     
        </>
    )
}

export default Layout;
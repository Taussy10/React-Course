// Layout.jsx = App.jsx where every comps render 
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
    {/* We know that react is SPA so two comps will be be fixed*(Constant) named as Header and Footer and other comps will change according to navigation links for this we will use Outlet from react-router-dom */}
    <Header/>

    <Outlet/>

    <Footer/>

    </>
  )
}

export default Layout
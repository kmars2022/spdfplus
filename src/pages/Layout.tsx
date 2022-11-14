import HeaderA from "../components/header/HeaderA"
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return(
        <>
        {/* <HeaderA/> */}
        <Outlet/>
        </>
    )
}

export default Layout;
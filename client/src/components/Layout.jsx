import {Link, NavLink} from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-[30px]">
                    <div className="col-span-2">
                        <div className="logo">
                            <img src="logo.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-end-7">
                        <div className="menu">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/aboutus"}>About Us</NavLink>
                            <NavLink to={"/products"}>Products</NavLink>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <Link to="/login"> Log In </Link>
                        <Link to="/signUp"> Sign Up </Link>
                    </div>
                </div>
            </div>
            {props.children}
        </div>

    );
};

export default Layout;
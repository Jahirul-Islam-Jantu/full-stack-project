import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Products from "./pages/Products.jsx";
import AboutUs from "./pages/AboutUs.jsx";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/signUp" element={<SignUp/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
            </Routes>
        </HashRouter>
    );
};

export default App;
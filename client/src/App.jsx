import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Products from "./pages/Products.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import {Toaster} from "react-hot-toast";


const App = () => {
    return (
        <HashRouter>
            <Toaster position="top-center" reverseOrder={false}/>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
        </HashRouter>
    );
};

export default App;
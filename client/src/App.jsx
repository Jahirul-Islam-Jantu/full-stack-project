import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Products from "./pages/Products.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import {Toaster} from "react-hot-toast";
import PrivetRoute from "./components/PrivateRoute.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";


const App = () => {
    return (
        <HashRouter>
            <Toaster position="top-center" reverseOrder={false}/>
            <Routes>
                <Route path="/" element={<HomePage /> } />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/signUp" element={<SignUp/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/dashboard" element={ <PrivateRoute> <DashBoard/> </PrivateRoute> } />

            </Routes>
        </HashRouter>
    );
};

export default App;
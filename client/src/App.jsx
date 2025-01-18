import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Products from "./pages/Products.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import {Toaster} from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute.jsx";


const App = () => {
    return (
        <HashRouter>
            <Toaster position="top-center" reverseOrder={false}/>
            <Routes>
                <Route path="/" element={<PrivateRoute> <HomePage /> </PrivateRoute> } />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/signUp" element={<SignUp/>} />
                <Route path="/products" element={<PrivateRoute>  <Products/> </PrivateRoute> } />
                <Route path="/aboutus" element={ <PrivateRoute>  <AboutUs/> </PrivateRoute> } />
                <Route path="/contact" element={ <PrivateRoute>  <ContactPage/>  </PrivateRoute> } />
            </Routes>
        </HashRouter>
    );
};

export default App;
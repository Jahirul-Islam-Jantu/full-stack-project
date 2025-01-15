import Layout from "../components/Layout.jsx";
import Footer from "../components/Footer.jsx";
import SignUpForm from "../components/SignUpForm.jsx";

const SignUp = () => {
    return (
        <Layout>
           <SignUpForm/>

            {/*    Footer Section   */}
            <Footer/>

        </Layout>
    );
};

export default SignUp;
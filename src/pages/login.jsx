/* eslint-disable react/no-unescaped-entities */
import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Binar Car Rental - Login</title>
        <meta name="Binar Car Rental" content="Login" />
      </Helmet>
      <AuthLayout title="Welcome Back!">
        <FormLogin />
        <p className="text-sm mt-4 text-center">
          Don't have an account?
          <Link to="/register" className="font-bold text-blue-600">
            Sign Up for free
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default LoginPage;

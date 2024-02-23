import React from "react";
import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Welcome Back!">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up for free
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;

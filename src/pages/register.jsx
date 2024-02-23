import React from "react";
import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Sign Up">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Sign In here
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;

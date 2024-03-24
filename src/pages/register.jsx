import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Binar Car Rental - Register</title>
        <meta name="Binar Car Rental" content="Register" />
      </Helmet>
      <AuthLayout title="Sign Up">
        <FormRegister />
        <p className="text-sm mt-5 text-center">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-blue-600">
            Sign In here
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default RegisterPage;

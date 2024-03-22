import { useEffect, useRef, useState } from "react";
import ButtonAuth from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status == 201) { // jika status created atau berhasil login
        localStorage.setItem("token", res.access_token);
        window.location.href = "/";
      } else {
        setLoginFailed(res.message);
        // mau narik api, tapi ga ada message nya di api binar
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="text"
        placeholder="Contoh:johndoe@gmail.com"
        name="email"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="6+ karakter"
        name="password"
      />

      <ButtonAuth type="submit">Sign In</ButtonAuth>
      {loginFailed && (
        // <p className="text-danger text-center mt-3">
        //   email atau password salah
        // </p>
        <p className="text-danger text-center mt-3">
          {loginFailed}
        </p>
      )}
    </form>
  );
};

export default FormLogin;

import { useRef, useState } from "react";
import ButtonAuth from "../Elements/Button";
import InputForm from "../Elements/Input";
import axios from "axios";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Customer",
  });
  const email = useRef(null);
  const password = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email.current.value,
      password: password.current.value,
      role: "Customer",
    };

    try {
      const response = await axios.post(
        "https://api-car-rental.binaracademy.org/customer/auth/register",
        formData
      );
      window.location.href = "/login";
      // Tambahkan logika navigasi atau tindakan setelah pendaftaran berhasil
    } catch (error) {
      console.error("Registration failed!", error);
      // Tambahkan logika penanganan kesalahan, seperti menampilkan pesan kesalahan kepada pengguna
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm label="Name*" type="text" placeholder="Nama Lengkap" />
      <InputForm
        label="Email*"
        type="email"
        placeholder="Contoh: johndee@gmail.com"
        name="email"
        value={formData.email}
        ref={email}
        onChange={handleChange}
      />
      <InputForm
        label="Create Password"
        type="password"
        placeholder="6+ karakter"
        name="password"
        value={formData.password}
        ref={password}
        onChange={handleChange}
      />

      <ButtonAuth type="submit">Sign Up</ButtonAuth>
    </form>
  );
};

export default FormRegister;

import ButtonAuth from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Name*"
        type="text"
        placeholder="Nama Lengkap"
        name="fullname"
      />
      <InputForm
        label="Email*"
        type="email"
        placeholder="Contoh: johndee@gmail.com"
        name="email"
      />
      <InputForm
        label="Create Password"
        type="password"
        placeholder="6+ karakter"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="Ketik Ulang Password"
        name="password"
      />

      <ButtonAuth classname="bg-blue-900 w-full">Sign Up</ButtonAuth>
    </form>
  );
};

export default FormRegister;

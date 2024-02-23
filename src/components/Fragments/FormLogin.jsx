import ButtonAuth from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="Contoh:johndee@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="6+ karakter"
        name="password"
      />

      <ButtonAuth classname="bg-blue-900 w-full">Sign In</ButtonAuth>
    </form>
  );
};

export default FormLogin;

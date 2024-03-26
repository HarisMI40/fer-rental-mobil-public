import style from "./AuthLayouts.module.css";
import loginImage from "../../assets/login/login.jpg";

const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    // <div className="d-flex align-items-center vh-100">

    // </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div
            className={`${style.logintop} d-flex justify-content-center align-items-center`}
          >
            <div className="">
              <h1 className="mb-4">{title}</h1>
              {children}
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

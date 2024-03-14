const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    // <div className="d-flex align-items-center vh-100">

    // </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="align-items-center mx-auto">
            <div className="">
              <h1 className="mb-4">{title}</h1>
              {children}
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src="/src/assets/login/login.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

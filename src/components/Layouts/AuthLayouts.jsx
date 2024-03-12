const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="">
        <h1 className="mb-4">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-sx">
        <h1 className="text-3xl font-bold mb-8 text-Black flex justify-center">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

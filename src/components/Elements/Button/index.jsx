const ButtonAuth = (props) => {
  const { children, classname } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold ${classname} text-white`}
      tpye="submit"
    >
      {children}
    </button>
  );
};

export default ButtonAuth;

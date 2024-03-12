import Button from "react-bootstrap/Button";

const ButtonAuth = (props) => {
  const { children, classname, onClick = () => {}, type = "button" } = props;
  return (
    <div className="d-grid gap-2">
      <Button
        className={` ${classname}`}
        type={type}
        variant="primary"
        size="sm"
        onClick={() => onClick()}
      >
        {children}
      </Button>
    </div>
  );
};

export default ButtonAuth;

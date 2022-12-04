import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";
const ErrorModal = (props) => {
  return (
    <>
      <div className="backdrop" />
      <Card cssClassName="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  );
};
export default ErrorModal;

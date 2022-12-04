import "./Card.css";
const Card = (props) => {
  return <div className={`card ${props.cssClassName}`}>{props.children}</div>;
};
export default Card;

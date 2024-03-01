import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardHeader({ name, icon }) {
  return (
    <>
      <span className="card-header">
        <FontAwesomeIcon className="icon" icon={icon} />
        <h1>{name}</h1>
      </span>
      <hr />
    </>
  );
}

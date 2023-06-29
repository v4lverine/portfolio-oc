import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        href="#"
        onClick={(event) => {
          event.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {props.label}{" "}
        {isOpen ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleUp} rotation={180} />
        )}
      </button>
      {isOpen && <div>{props.children}</div>}
    </div>
  );
}

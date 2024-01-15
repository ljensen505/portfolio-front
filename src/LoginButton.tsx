import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";

const rightToBracket = <FontAwesomeIcon icon={faRightToBracket} />;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Nav.Link onClick={() => loginWithRedirect()}>{rightToBracket}</Nav.Link>
  );
};

export default LoginButton;

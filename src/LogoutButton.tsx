import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";

const rightFromBracket = <FontAwesomeIcon icon={faRightFromBracket} />;

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Nav.Link
      style={{ color: "red" }}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      {rightFromBracket}
    </Nav.Link>
  );
};

export default LogoutButton;

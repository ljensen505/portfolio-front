import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Navbar } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const email = <FontAwesomeIcon icon={faEnvelope} />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const github = <FontAwesomeIcon icon={faGithub} />;

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
}

function Header(props: HeaderProps) {
  const { isAuthenticated } = useAuth0();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <p className="h4">{props.name}</p>
          <p className="h6">{props.title}</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href={`mailto:${props.email}`}>{email}</Nav.Link>
            <Nav.Link href={props.linkedin} target="_blank">
              {linkedin}
            </Nav.Link>
            <Nav.Link href={props.github} target="_blank">
              {github}
            </Nav.Link>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

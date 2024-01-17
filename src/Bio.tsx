import { Row, Col } from "react-bootstrap";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import ResumeUpload from "./ResumeUpload";
import { API_URL } from "./api";

interface BioProps {
  bio: string;
}

const resumeUrl = `${API_URL}static/resume.pdf`;
const download = <FontAwesomeIcon icon={faDownload} />;

const siteOwnerSub = import.meta.env.VITE_SITE_OWNER_SUB as string;

function BioRow(props: BioProps) {
  const { isAuthenticated, user } = useAuth0();
  const bioLines = props.bio.split("\n").map((line, index) => {
    return (
      <p className="bio-p" key={index}>
        {line}
      </p>
    );
  });

  return (
    <Row>
      <Col className="">
        <p className="h1 text-end mt-4 ">About Me</p>
        {bioLines}
        <Nav.Link className="text-center" target="_blank" href={resumeUrl}>
          Resume {download}
        </Nav.Link>
        {isAuthenticated && user?.sub === siteOwnerSub && (
          <Nav.Link className="text-center resume-replace">
            <ResumeUpload />
          </Nav.Link>
        )}
      </Col>
    </Row>
  );
}

export default BioRow;

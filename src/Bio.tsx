import { Row, Col } from "react-bootstrap";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "react-bootstrap";

interface BioProps {
  bio: string;
}

const resumeUrl = "https://api.lucasjensen.me/static/resume.pdf";
const download = <FontAwesomeIcon icon={faDownload} />;

function BioRow(props: BioProps) {
  const bioLines = props.bio.split("\n").map((line, index) => {
    return <p key={index}>{line}</p>;
  });

  return (
    <Row>
      <Col className="text-center">
        <p className="h1">About Me</p>
        {bioLines}
        <Nav.Link href={resumeUrl}>Resume {download}</Nav.Link>
      </Col>
    </Row>
  );
}

export default BioRow;

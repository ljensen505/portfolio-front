import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import BioRow from "./Bio";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Projects from "./Projects/Projects";
import ErrModal from "./ErrModal";
import { ErrModalProps } from "./ErrModal";
import { fetchFromApi, API_URL } from "./api";

interface About {
  name: string;
  email: string;
  bio: string;
  github: string;
  linkedin: string;
}

interface APIversion {
  version: string;
}

function App() {
  const [aboutData, setAboutData] = useState<About>();
  const [apiVersion, setApiVersion] = useState<APIversion>();
  const [error, setError] = useState<ErrModalProps>();

  useEffect(() => {
    fetchFromApi("/about")
      .then((data) => {
        setAboutData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetchFromApi("/")
      .then((data) => {
        setApiVersion(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <>
        <ErrModal message={error.message} url={API_URL} />
      </>
    );
  }

  return (
    <>
      <Header
        name="Lucas Jensen"
        title="Software Engineer"
        email={aboutData?.email || ""}
        linkedin={aboutData?.linkedin || ""}
        github={aboutData?.github || ""}
      />
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <BioRow bio={aboutData?.bio || ""} />
          </Col>
        </Row>
        <Projects />
      </Container>
      <footer className="text-center">
        <p>
          API version: <code>{apiVersion?.version || ""}</code>
        </p>
      </footer>
    </>
  );
}

export default App;

import { Col, Row } from "react-bootstrap";
import ProjectCard from "./Project";
import { ProjectProps } from "./Project";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../api";

function Projects() {
  const [projectsData, setProjectsData] = useState<ProjectProps[]>([]);
  useEffect(() => {
    fetchFromApi("/projects")
      .then((data) => {
        setProjectsData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const projects = projectsData.map((project) => {
    return (
      <Row key={project.id} className="justify-content-md-center mb-3">
        <Col md={8} style={{ maxWidth: "36rem" }}>
          <ProjectCard
            id={project.id}
            name={project.name}
            description={project.description}
            source={project.source}
            live={project.live}
            is_self_hosted={project.is_self_hosted}
          />
        </Col>
      </Row>
    );
  });

  return (
    <>
      <hr />
      <Row>
        <Col className="text-center">
          <p className="h1">Projects</p>
          <p>
            'self hosted' indicates that a given project is hosted on a
            Raspberry Pi or with Linode. These projects are served with Nginx
            and managed with a combination of GitHub Actions/Webhooks, systemd,
            and a custom CI/CD pipeline.
          </p>
        </Col>
      </Row>
      {projects}
    </>
  );
}

export default Projects;

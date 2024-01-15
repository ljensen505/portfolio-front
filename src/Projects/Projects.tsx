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

  const handleDeleteProject = (id: number) => {
    setProjectsData(projectsData.filter((project) => project.id !== id));
  };

  const projects = projectsData.map((project) => {
    return (
      <Row key={project.id} className=" mb-3">
        <Col>
          <ProjectCard
            id={project.id}
            name={project.name}
            description={project.description}
            source={project.source}
            live={project.live}
            is_self_hosted={project.is_self_hosted}
            onDelete={handleDeleteProject}
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
          <p className="h1 text-end mt-4">Projects</p>
          <p className="project-description">
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

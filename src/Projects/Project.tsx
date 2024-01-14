import Card from "react-bootstrap/Card";

export interface ProjectProps {
  id: number;
  name: string;
  description: string;
  source?: string;
  live?: string;
  is_self_hosted?: boolean;
}

function ProjectCard(props: ProjectProps) {
  const projectDescription = props.description
    .split("\n")
    .map((line, index) => {
      return <Card.Text key={index}>{line}</Card.Text>;
    });
  const title = props.is_self_hosted
    ? `${props.name} (self hosted)`
    : props.name;

  return (
    <Card id={`project-card-${props.id}`} className="bg-dark text-white">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {projectDescription}
        {props.source && (
          <Card.Link href={props.source} target="_blank">
            source
          </Card.Link>
        )}
        {props.live && (
          <Card.Link href={props.live} target="_blank">
            live
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

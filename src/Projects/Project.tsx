import { useAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../api";

export interface ProjectProps {
  id: number;
  name: string;
  description: string;
  source?: string;
  live?: string;
  is_self_hosted?: boolean;
  onDelete: (id: number) => void;
}

const trash = <FontAwesomeIcon icon={faTrash} />;
const pen = <FontAwesomeIcon icon={faPen} />;

function ProjectCard(props: ProjectProps) {
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  const siteOwnerSub = import.meta.env.VITE_SITE_OWNER_SUB as string;

  const handleDelete = async () => {
    const accessToken = await getAccessTokenSilently({
      authorizationParams: { audience: "https://api.lucasjensen.me/" },
    });

    fetch(`${API_URL}/projects/${props.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (response.status === 204) {
          props.onDelete(props.id);
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
      {isAuthenticated && user?.sub === siteOwnerSub && (
        <Card.Footer className="text-end">
          <Card.Link onClick={handleDelete} className="delete-project">
            {trash}
          </Card.Link>
          <Card.Link className="edit-project">{pen}</Card.Link>
        </Card.Footer>
      )}
    </Card>
  );
}

export default ProjectCard;

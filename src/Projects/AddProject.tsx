import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddProject() {
  const [show, setShow] = useState(false);

  const plus = <FontAwesomeIcon icon={faPlus} />;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Add Project {plus}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ color: "black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>coming soon</Modal.Body>
        <Modal.Body>not yet implimented by frontend</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled variant="primary" onClick={handleClose}>
            Go!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProject;

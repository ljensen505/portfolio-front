import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ResumeUpload() {
  const [show, setShow] = useState(false);

  const upload = <FontAwesomeIcon icon={faUpload} />;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Replace {upload}
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
          <Modal.Title>Upload new resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>coming soon</Modal.Body>
        <Modal.Body>not yet implimented by backend</Modal.Body>
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

export default ResumeUpload;

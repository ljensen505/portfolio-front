import Modal from "react-bootstrap/Modal";

export interface ErrModalProps {
  message: string;
  url?: string;
}

function ErrModal(props: ErrModalProps) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <div className="error-modal">
          <Modal.Header>
            <Modal.Title>API Error</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{props.message}</p>
            {props.url && (
              <p>
                <code className="error-url">{props.url}</code>
              </p>
            )}
          </Modal.Body>
        </div>
      </Modal.Dialog>
    </div>
  );
}

export default ErrModal;

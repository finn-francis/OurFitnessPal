import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

export default function ConfirmationModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleConfirm = () => {
    props.handleConfirm();
    handleClose();
  }

  return (
    <>
      <Button variant={props.variant} onClick={handleShow}>
        {props.buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {props.cancelText}
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            {props.confirmText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

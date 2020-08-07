import React from 'react';
import {Modal,Button} from 'react-bootstrap';

function ModalWindow({show, handleClose,handleChange, guest}) {

    return (
            <div >
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dear {guest.firstName + " " + guest.lastName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>We wood like to invite you to our event</p>
                        <p>Are you able to join?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleChange({id:guest.id,invite_status:"Declined"})}>
                            Decline
                        </Button>
                        <Button variant="primary" onClick={() => handleChange({id:guest.id,invite_status:"Accepted"})}>
                            Accept
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
    );

}
export default ModalWindow;
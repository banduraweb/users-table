import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";


const ModalWindow = ({userData, getConfirmDeleteUser}) => {
    const [confirm, setConfirm] = useState({
        CANCEL: '',
        DELETE: ''
    });

    const {CANCEL, DELETE} = confirm;
    const {firstName, lastName, id} = userData;

    getConfirmDeleteUser(CANCEL, DELETE, id);

    return (
        <>
            <Modal.Dialog className="fixed-top">
                <Modal.Header >
                    <Modal.Title>Please confirm deleting user from IndexedDB</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>NAME: {firstName} {lastName}</p>
                    <p>ID: {id}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={()=>{setConfirm({CANCEL: "CANCEL"})}}
                        variant="secondary">Cancel</Button>
                    <Button onClick={()=>{setConfirm({DELETE: "DELETE"})}}
                        variant="primary">Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </>
    )

};

export default ModalWindow;
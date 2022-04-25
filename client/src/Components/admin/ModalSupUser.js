import React from 'react'
import { useState } from "react";
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { deleteUser } from "../../js/actions/user";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
const ModalSupUser = (user) => {
  console.log(user)
    const dispatch = useDispatch();
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
         <div>
            <Button variant='contained' color='secondary' onClick={handleShow}>
           supprimer
            </Button>
            
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal Supression</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                vous etes sure ??
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  fermer
                </Button>
                //lenna
                <Button variant="primary"  onClick={() => dispatch(deleteUser(user.prof._id))}>
                  confirmer
                </Button>
              </Modal.Footer>
            </Modal>
            </div>
        );
      }
      
export default ModalSupUser
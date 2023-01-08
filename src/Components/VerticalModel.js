import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


import React from 'react'

const VerticalModel = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             Payment Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <PayPalScriptProvider>
            <PayPalButtons/>
           </PayPalScriptProvider>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
}

export default VerticalModel


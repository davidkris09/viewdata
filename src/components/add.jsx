import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import response from '../../viewData.json'

export const ContainerAdd = styled.div`
    width: 100%;
    height: 100px;
    display: relative;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    text-align: left;
`

export const Add = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd = () => {
        document.getElementsByClassName('productID')[0].value !== '' &&
        document.getElementsByClassName('productName')[0].value !== '' &&
        document.getElementsByClassName('amount')[0].value !== '' &&
        document.getElementsByClassName('customerName')[0].value !== '' &&
        document.getElementsByClassName('createdBy')[0].value !== '' ?
            response.data.push(JSON.parse({
                "id": response.data.id[response.data.id.length -1] + 1,
                "productID": document.getElementsByClassName('productID')[0].value,
                "productName": document.getElementsByClassName('productName')[0].value,
                "amount": document.getElementsByClassName('amount')[0].value,
                "customerName" : document.getElementsByClassName('customerName')[0].value,
                "status": 0,
                "transactionDate": today.toISOString(),
                "createBy" : document.getElementsByClassName('createdBy')[0].value,
                "createOn" : today.toISOString()
            })) : ''
    }

    return (
        <>
            <ContainerAdd>
                <span><Title>List of Data</Title>
                <Button variant="primary" className='btnAdd' onClick={handleShow}>Add +</Button></span>
            </ContainerAdd>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product ID</Form.Label>
                        <Form.Control type="text" placeholder="Product ID" className='productID'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Product Name" className='productName'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" placeholder="Amount" className='amount'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control type="text" placeholder="Customer Name" className='customerName'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Created By</Form.Label>
                        <Form.Control type="text" placeholder="Created By" className='createdBy'/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

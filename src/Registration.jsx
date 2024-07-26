import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

import { useState } from 'react';
import axios from 'axios';
const Registration = () => {
    const [input,setInput]=useState({})
    const handleInput=(e)=>{
           let name=e.target.name
           let value=e.target.value
           setInput(values=>({...values,[name]:value}))
    }
    const handleSubmit=()=>{
        let api="http://localhost:3000/ragesrer";
        axios.post(api,input).then((ress)=>{
              alert("You are Successfully Registrated !!!")
        })
    }
    return (
        <>
            <Container style={{width:400}}>
                <h1>User Registration</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Id</Form.Label>
                    <Form.Control type="text" name='userid' value={input.userid} onChange={handleInput} placeholder="Enter User Id" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' value={input.name} onChange={handleInput} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' value={input.email} onChange={handleInput} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Passward</Form.Label>
                    <Form.Control type="passward" name='pass' value={input.pass} onChange={handleInput} placeholder="Enter Passward" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Re-Passward</Form.Label>
                    <Form.Control type="passward" name='repass' value={input.repass} onChange={handleInput} placeholder="Enter Re-Passward" />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit} type="submit">
                    Submit
                </Button>
            </Container>
        </>
    )
}
export default Registration;
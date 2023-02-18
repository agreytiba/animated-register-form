import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import {BsTriangleFill} from "react-icons/bs"
const Register = () => {
	return (
		<Card className=" p-4 position-relative" style={{ width: '300px', height: '400px',border:"none", backgroundColor: 'tomato', overflow:"hidden" }}>
			<Card.Title className='text-light'>Create New Account</Card.Title>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>User Name</Form.Label>
					<Form.Control type="text" placeholder="Enter Name" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Button variant="light" type="submit" className="w-100 py-1">
					CREATE ACCOUNT
				</Button>
            </Form>
            <span className='position-absolute top-100 start-100 translate-middle '
                
            >
                <BsTriangleFill className='p-1 '
                style={{width:"150px", height:"150px", color:"#666", transform:"rotate(30deg)"}}
                />
            </span>
		</Card>
	);
};

export default Register;

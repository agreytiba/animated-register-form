import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { BsTriangleFill } from "react-icons/bs"
type Props = {
	handleRegister: () =>void
}
const Register = ({handleRegister}:Props) => {
	return (
		<>
			<style>
				{`
				@key frame agrey {
					0%
				}
				`
				}
			</style>
		<Card className=" p-4 position-relative register" style={{ width: '300px', height: '400px',border:"none", backgroundColor: 'tomato', overflow:"hidden",animation:"grey 0.3s" }}>
			<Card.Title className='text-light'>Create New Account</Card.Title>
			<Form onSubmit={handleRegister}>
				<Form.Group className="mb-2" controlId="formBasicName">
					<Form.Label>User Name</Form.Label>
					<Form.Control type="text" placeholder="Enter Name" />
				</Form.Group>
				<Form.Group className="mb-2" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-2" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Button variant="light" type="submit" className="w-100 py-2 mt-1">
					CREATE ACCOUNT
				</Button>
			</Form>
	
            <span className='position-absolute top-100 start-100 translate-middle '
                
            >
                <BsTriangleFill className='p-1 '
                style={{width:"150px", height:"150px", color:"teal", transform:"rotate(30deg)"}}
                />
            </span>
			</Card>
		</>
	);
};

export default Register;

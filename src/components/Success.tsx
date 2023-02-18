import React from 'react';
import { Row, Col, Card,Button} from 'react-bootstrap';
import { IoCheckmark } from "react-icons/io5"
type Props = {
  handleSucess: () => void
}
const Sucess = ({handleSucess}:Props) => {
	return (
		<Card style={{ width: '300px', overflow: 'hidden', backgroundColor: 'teal' }}>
			<Row className="justify-content-between align-items-center" style={{ width: '300px', height: '400px' }}>
				<Col className="ms-4 text-light">
					<Card.Title className="fs-2">Great!</Card.Title>
					<Card.Subtitle>your account was created successfully!</Card.Subtitle>
					<Card.Text>
						<IoCheckmark style={{ fontSize: '40px',color:"#fff"}}  />
					</Card.Text>
					<Button variant='light' style={{ border: 'none', width: '100%' }} onClick={handleSucess}>Finish</Button>
				</Col>
			</Row>
		</Card>
	);
};

export default Sucess;

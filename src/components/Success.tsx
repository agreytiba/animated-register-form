import React from 'react';
import { Row, Col, Card,Button} from 'react-bootstrap';
import { IoCheckmark } from "react-icons/io5"
type Props = {
  handleSucess: () => void
}
const Sucess = ({handleSucess}:Props) => {
	return (
		
<>
		<style>
			{`
				.animated-card{
                  animation:  animated1 0.3s ease-in;
				}
                @keyframes animated1 {
                  0% {
                   transform: translateY(-100px);
	               background-color:#333;
                  }
                 100% {
					transform: translateY(0px );
	               
				  }
                }

				.btn{
                  margin-top:2rem;
                  animation:  animated2 0.3s ease-in;
                }

                @keyframes animated2 {
                 0% {
                   transform: translateY(200px);
	                background-color:#333;
   
                  }
 
                  100% {
                    transform: translateY(0px );
	                background-color: tomato;
				   }
				}

				
			`}
		</style>
			<Card style={{ width: '300px', overflow: 'hidden', backgroundColor: 'teal' }}>
			<Row className="justify-content-between align-items-center" style={{ width: '300px', height: '400px' }}>
				<Col className="ms-4 text-light">
						<div className='animated-card'>
								<Card.Title className="fs-2">Great!</Card.Title>
					<Card.Subtitle>your account was created successfully!</Card.Subtitle>
					<Card.Text>
						<IoCheckmark style={{ fontSize: '40px',color:"#fff"}}  />
					</Card.Text>
					</div>
				
					<Button variant='light' className='btn' style={{ border: 'none', width: '100%' }} onClick={handleSucess}>Finish</Button>
				</Col>
			</Row>
		</Card>
		</>
	
	);
};

export default Sucess;

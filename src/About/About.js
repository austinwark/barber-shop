import React from 'react';

import './About.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';


class About extends React.Component {

	render() {

		return (
			<div id='about'>
				<div className='container'>
					<div className='row my-5 mx-auto'>
						<div className='col-12 col-md-6 mb-5' id='payments-col'>
							<Card className='mx-auto'>
								<Card.Header className=''>
									<Card.Title className='text-light text-center'><h3>Walk-ins Welcomed</h3></Card.Title>
								</Card.Header>
								<Card.Body className='text-left'>
									<ListGroup variant='flush'>
										<h5 className='mb-4'>Payments</h5>
										<ListGroup.Item action className='text-success'>&#10004;Cash</ListGroup.Item>
										<ListGroup.Item action className='text-success'>&#10004;Venmo</ListGroup.Item>
										<ListGroup.Item action className='text-danger'>&#10008; &nbsp;&nbsp;Card</ListGroup.Item>
									</ListGroup>
								</Card.Body>
							</Card>
						</div>
						<div className='col-12 col-md-6 mb-5 ml-auto' id='hours-col'>
							<Card className='text-left mx-auto'>
								<Card.Header className=''>
									<Card.Title className='text-light text-center'><h3>Hours</h3></Card.Title>
								</Card.Header>
								<Card.Body>
									<ListGroup variant='flush'>
										<ListGroup.Item action className='text-light'>
											Monday
											<span className='hours-badge text-warning'>CLOSED</span>
										</ListGroup.Item>
										<ListGroup.Item action className='text-light'>
											Tuesday
											<span className='hours-badge text-info'>8:00am - 6:00pm</span>
										</ListGroup.Item>
										<ListGroup.Item action className='text-light'>
											Wednesday
											<span className='hours-badge text-info'>8:00am - 6:00pm</span>
										</ListGroup.Item>
										<ListGroup.Item action className='text-light'>
											Thursday
											<span className='hours-badge text-info'>8:00am - 6:00pm</span>
										</ListGroup.Item>
										<ListGroup.Item action className='text-light'>
											Friday
											<span className='hours-badge text-info'>8:00am - 6:00pm</span>
										</ListGroup.Item>
										<ListGroup.Item action className='text-light'>
											Saturday
											<span className='hours-badge text-info'>8:00am - 12:00pm</span>
										</ListGroup.Item><ListGroup.Item action className='text-light'>
											Sunday
											<span className='hours-badge text-warning'>CLOSED</span>
										</ListGroup.Item>
									</ListGroup>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
				<div className='container-fluid bg-secondary'>
					<div className='row'>
						<div className='col-12'>
							<h1 className='text-center text-primary my-5'>Since 1996</h1>
							<p className='text-center text-dark about-shop-p'>Bill's Barber Shop is a classic, American, no-holds-barred barbershop. A variety of services is 
							offered, catering to everyone, with solely the clientele in mind. The Shop stays true to the ways of the classic gentleman's shop, 
							striving to bring the memories back. People still pay for quality - Bill's Barber Shop is where you will get it. I am a barber who 
							loves my craft, providing top-notch service that helps men stay sharp.</p>
						</div>
					</div>
				</div>
				<div className='container my-5'>
					<div className='row'>
						<div className='col-12 col-md-6 mx-auto mb-5'>
							<Image src='https://i.postimg.cc/d0MQhBTL/insta-photo-1.jpg' thumbnail className='mx-auto' />
						</div>
						<div className='col-12 col-md-6 mx-auto'>
							<Card className='mx-auto'>
								<Card.Header className=''>
									<Card.Title><h2>Bill The Barber</h2></Card.Title>
								</Card.Header>
								<Card.Body>
									<p className='btb-card-p'>Bill Rudolph is a father, a husband, a veteran, and an esteemed local business owner. After cutting hair for over 30
									years, Bill has secured a steady clientele who appreciate his experience and itegrity. Whether you are looking for the newest 
									and sharpest style, or want to remain true to the classic cuts, Bill is your local go-to barber.</p>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default About;
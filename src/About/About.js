import React from 'react';

import './About.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup' //;&#10004;;&#10008;
import Image from 'react-bootstrap/Image' 
import Jumbotron from 'react-bootstrap/Jumbotron';


class About extends React.Component {

	render() {

		return (
			<div id='about'>
				<div className='container mt-5'>
					<div className='row'>
						<div className='col-12 col-md-5 ml-auto'>
							<h2 className='mb-4'>Payments</h2>
							<ListGroup variant='flush' className=''>
								<ListGroup.Item className='bg-dark text-success'>
									<p>&#10004;&nbsp;Cash</p>
								</ListGroup.Item>
								<ListGroup.Item className='bg-dark text-success'>
									<p>&#10004;&nbsp;Venmo</p>
								</ListGroup.Item>
								<ListGroup.Item className='bg-dark text-danger'>
									<p>&#10008; &nbsp;&nbsp;Card</p>
								</ListGroup.Item>
							</ListGroup>
						</div>
						<div className='col-12 col-md-5 mr-auto'>
							<h2 className='mb-4'>Hours</h2>
							<ListGroup variant='flush' className='bg-dark'>
								<ListGroup.Item className='bg-dark'>
									<p>Monday<span className='float-right'>CLOSED</span></p>
								</ListGroup.Item>
								<ListGroup.Item className='bg-dark'>
									<p>Tuesday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item className='bg-dark'>
									<p>Wednesday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item className='bg-dark'>
									<p>Thursday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item className='bg-dark'>
									<p>Friday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item className='bg-dark'>
									<p>Friday<span className='float-right'>8:00am - 12:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item className='bg-dark'>
									<p>Friday<span className='float-right'>CLOSED</span></p>
								</ListGroup.Item>
							</ListGroup>
						</div>
					</div>
				</div>
				<hr className='w-75'></hr>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-10 mx-auto linear-gradient'>
							<h1 className='text-center text-primary my-5'>Since 1996</h1>
							<p className='text-center text-secondary about-shop-p'>Bill's Barber Shop is a classic, American, no-holds-barred barbershop. A variety of services is 
							offered, catering to everyone, with solely the clientele in mind. The Shop stays true to the ways of the classic gentleman's shop, 
							striving to bring the memories back. People still pay for quality - Bill's Barber Shop is where you will get it. I am a barber who 
							loves my craft, providing top-notch service that helps men stay sharp.</p>
						</div>
					</div>
				</div>
				<div className='container my-5'>
					<div className='row'>
						<div className='col-12 col-md-5 ml-auto mb-5'>
							<Image src='https://i.postimg.cc/d0MQhBTL/insta-photo-1.jpg' thumbnail className='mx-auto shadow-lg' />
						</div>
						<div className='col-12 col-md-5 mr-auto'>
							<Card className='mx-auto shadow-lg'>
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
				<hr className='w-75 my-5'></hr>
			</div>
			)
	}
}

export default About;
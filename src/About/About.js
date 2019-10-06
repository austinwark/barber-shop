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
						<div className='col-12 col-md-3 col-xl-5 ml-auto'>
							<h3 className='mb-4'>Payments</h3>
							<ListGroup variant='flush' className=''>
								<ListGroup.Item action className='text-success pl-2'>
									<p>&#10004;&nbsp;Cash</p>
								</ListGroup.Item>
								<ListGroup.Item action className='text-success pl-2'>
									<p>&#10004;&nbsp;Venmo</p>
								</ListGroup.Item>
								<ListGroup.Item action className='text-danger pl-2'>
									<p>&#10008; &nbsp;&nbsp;Card</p>
								</ListGroup.Item>
							</ListGroup>
						</div>
						<div className='col-12 col-md-5 mr-auto mt-5 mt-md-0'>
							<h3 className='mb-4'>Hours</h3>
							<ListGroup variant='flush' className='text-primary'>
								<ListGroup.Item action className=''>
									<p>Monday<span className='float-right'>CLOSED</span></p>
								</ListGroup.Item>
								<ListGroup.Item action className=''>
									<p>Tuesday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item action className=''>
									<p>Wednesday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item action className=''>
									<p>Thursday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item action className=''>
									<p>Friday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item action className=''>
									<p>Saturday<span className='float-right'>8:00am - 12:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item action className=''>
									<p>Sunday<span className='float-right'>CLOSED</span></p>
								</ListGroup.Item>
							</ListGroup>
						</div>
					</div>
				</div>
				<hr className='w-75'></hr>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-8 mx-auto linear-gradient'>
							<h1 className='text-center text-primary mt-5 mb-3'>Since 1996</h1>
							<p className='text-center text-secondary about-shop-p'>Bill's Barber Shop is a classic, American, no-holds-barred barbershop. A variety of services is 
							offered, catering to everyone, with solely the clientele in mind. The Shop stays true to the ways of the classic gentleman's shop, 
							striving to bring the memories back. People still pay for quality - Bill's Barber Shop is where you will get it. I am a barber who 
							loves my craft, providing top-notch service that helps men stay sharp.</p>
						</div>
					</div>
				</div>
				<div className='container my-5'>
					<div className='row'>
						<div className='col-12 col-md-8 mx-md-auto col-lg-4 col-xl-5 ml-lg-auto mr-lg-0 mb-5'>
							<Image src='https://i.postimg.cc/d0MQhBTL/insta-photo-1.jpg' thumbnail className='mx-auto shadow-lg' />
						</div>
						<div className='col-12 col-md-8 mx-md-auto col-lg-5 mr-lg-auto ml-lg-0'>
							<ListGroup variant='flush' className='mx-auto text-primary'>
								<ListGroup.Item className=''>
									<h2>Bill The Barber</h2>
								</ListGroup.Item>
								<ListGroup.Item>
									<p className='btb-card-p'>Bill Rudolph is a father, a husband, a veteran, and an esteemed local business owner. After cutting hair for over 30
									years, Bill has secured a steady clientele who appreciate his experience and itegrity. Whether you are looking for the newest 
									and sharpest style, or want to remain true to the classic cuts, Bill is your local go-to barber.</p>
								</ListGroup.Item>
							</ListGroup>
						</div>
					</div>
				</div>
				<hr className='w-75 my-5'></hr>
			</div>
			)
	}
}

export default About;
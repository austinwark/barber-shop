import React from 'react';

import './Footer.css';

import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Footer extends React.Component {

	isMobileDevice() {
    	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	}

	render() {

		if (this.isMobileDevice() == true) {

		return (
				<Jumbotron fluid className='container-fluid bg-dark m-0 p-3' id='contact'>
					<h1 className='display-4 text-center my-0 text-primary'>Contact</h1>
					<div className='row mt-3'>
						<div className='col-11 col-md-4 mx-auto ml-md-auto mr-5 shadow-lg' id='map-div'>
							<div id='google-map'>
							</div>
						</div>
						<div className='col-11 col-md-5 mx-auto mt-4 mt-md-0 ml-md-5 mr-md-auto'>
							<div className='row mt-2 text-light'>
								<div className='col-6 contact-address'>
									<h6>Address</h6>
									<address>
										4337 NY-150,<br></br>West Sand Lake, NY 12196
									</address>
								</div>
								<div className='col-6 contact-phone'>
									<h6>Phone (text prefered)</h6>
									<address><a href='sms:+15185909013'>(518) 424-2850</a></address>
								</div>
							</div>
							<hr className='my-1'></hr>
							<div className='row mt-2'>
								<div className='col-12 text-left text-left text-light' id='footer-info'>
									<ol className=' float-left ml-0 pl-3'>
										<li>At the corner of Route 43 & Route 150, across from Doors of Hope</li>
										<li>Parking located in front of shop, as well as across the street</li>
										<li>Walk-ins welcomed and encouraged!</li>
										<li>Cash & the Venmo App accepted, no card</li>
									</ol>
								</div>
							</div>
							<div className='row mt-2'>
								<div className='col-12'>
									<div className='d-flex footer-links'>
										<span id='footer-link-divider'>|</span>
										<a href='https://www.facebook.com/pages/Bills-Barber-Shop/152627261418715' target='_blank'><img src='https://i.postimg.cc/s2KKgG7B/facebook-logo.png' /></a>
										<span id='footer-link-divider'>|</span>
										<a href='https://www.instagram.com/bills_american_barbershop/' target='_blank'><img src='https://i.postimg.cc/1ttBnRrv/insta-logo.png' id='desktop-insta' /></a>
										<span id='footer-link-divider'>|</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Jumbotron>
			)
		} else {
			return (
					<Jumbotron fluid className='container-fluid bg-dark m-0 p-3' id='contact'>
					<h1 className='display-4 text-center my-0 text-primary'>Contact</h1>
					<div className='row mt-3'>
						<div className='col-11 col-md-4 mx-auto ml-md-auto mr-5 shadow-lg' id='map-div'>
							<div id='google-map'>
							</div>
						</div>
						<div className='col-11 col-md-5 mx-auto mt-4 mt-md-0 ml-md-5 mr-md-auto'>
							<div className='row mt-2 text-light'>
								<div className='col-6 contact-address'>
									<h6>Address</h6>
									<address>
										4337 NY-150,<br></br>West Sand Lake, NY 12196
									</address>
								</div>
								<div className='col-6 contact-phone'>
									<h6>Phone (text prefered)</h6>
									<address><a href='sms:+15185909013'>(518) 424-2850</a></address>
								</div>
							</div>
							<hr className='my-1'></hr>
							<div className='row mt-2'>
								<div className='col-12 text-left text-left text-light' id='footer-info'>
									<ol className=' float-left ml-0 pl-3'>
										<li>At the corner of Route 43 & Route 150, across from Doors of Hope</li>
										<li>Parking located in front of shop, as well as across the street</li>
										<li>Walk-ins welcomed and encouraged!</li>
										<li>Cash & the Venmo App accepted, no card</li>
									</ol>
								</div>
							</div>
							<div className='row mt-2'>
								<div className='col-12'>
									<div className='d-flex footer-links'>
										<span id='footer-link-divider'>|</span>
										<a href='https://www.facebook.com/pages/Bills-Barber-Shop/152627261418715' target='_blank'><img src='https://i.postimg.cc/s2KKgG7B/facebook-logo.png' /></a>
										<span id='footer-link-divider'>|</span>
										<a href='https://www.instagram.com/bills_american_barbershop/' target='_blank'><img src='https://i.postimg.cc/1ttBnRrv/insta-logo.png' id='desktop-insta' /></a>
										<span id='footer-link-divider'>|</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Jumbotron>
				)
		}
	}
}

export default Footer;
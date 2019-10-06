import React from 'react';

import './Footer.css';

import ListGroup from 'react-bootstrap/ListGroup';

const Footer = () => {
	return (
		<div >
			<div className='container' id='contact'>
				<div className='row'>
					<div className='col-12 col-md-5 map-div ml-auto'>
						<div id='google-map'>a
						</div>
					</div>
					<div className='col-12 col-md-5 mr-auto'>
						<div className='row mt-2'>
							<div className='col-6'>
								<strong>Address</strong>
								<address>
									4337 NY-150,<br></br>West Sand Lake, NY 12196
								</address>
							</div>
							<div className='col-6'>
								<strong>Phone (text prefered)</strong>
								<address>(518) 424-2850</address>
							</div>
						</div>
						<hr></hr>
						<div className='row mt-2'>
							<div className='col-12 text-left text-left'>
								<ol className=' float-left ml-0 pl-3'>
									<li>At the corner of Route 43 & Route 150, across from Doors of Hope</li>
									<li>Parking located in front of shop, as well as across the street</li>
									<li>Walk-ins welcomed and encouraged!</li>
									<li>Cash & the Venmo App accepted, no card</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Footer;
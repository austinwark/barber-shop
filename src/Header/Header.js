import React from 'react';
import './Header.css';


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class Header extends React.Component {

	render() {

		return (
			<div>
				<div id='header-main' className='jumbotron jumbotron-fluid my-0'>
					<div id='header-text' className='container text-center text-light mt-5'>
						<h1 className='display-3 text-info'><strong>Bill's Barber Shop</strong></h1>
						<hr className=''></hr>
						<h2 className='text-secondary mt-2'>Est. 1996</h2>
					</div>
				</div>
				<Navbar bg='dark' variant='dark' expand='md' className='p-0' id='banner'>
					<Navbar.Toggle aria-controls='basic-navbar-nav'/>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav id='banner1' className='mr-auto abs-pos' fill >
							<Nav.Link href='#header-main' className='font-weight-bold first-child-link'>Home</Nav.Link>
							<Nav.Link href='#about' className='font-weight-bold'>About</Nav.Link>
							<Nav.Link href='#gallery' className='font-weight-bold'>Gallery</Nav.Link>
							<Nav.Link href='#testimonials' className='font-weight-bold'>Testimonials</Nav.Link>
							<Nav.Link href='#contact' className='font-weight-bold'>Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
			)
	}
}

export default Header;
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
						<h1 className='display-2 text-info'>Bill's Barber Shop</h1>
						<hr className=''></hr>
						<h2 className='lead text-secondary mt-2'>Est. 1996</h2>
					</div>
				</div>
				<Navbar bg='light' variant='light' expand='lg' className='p-0'>
					<Navbar.Toggle aria-controls='basic-navbar-nav'/>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto' fill >
							<Nav.Link href='#header-main' className='font-weight-bold text-center active'>Home</Nav.Link>
							<Nav.Link href='#about' className='font-weight-bold text-center active'>About</Nav.Link>
							<Nav.Link href='#gallery' className='font-weight-bold text-center active'>Gallery</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
			)
	}
}

export default Header;
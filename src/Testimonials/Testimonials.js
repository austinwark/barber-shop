import React from 'react';
import useState from 'react';

import './Testimonials.css';

import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'


class Testimonials extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0,
			direction: null
		};
	}

	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	}

	render() {
		const { index, direction } = this.state;

		return (
			<div className='col-12 col-md-10 mx-auto'>
			<Jumbotron>
				<Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} className='mb-5'>
					<Carousel.Item className='h-100 w-100'>
						<div className='d-block w-100 bg-light testimonial-slide'>
							<h1 className='m-2 text-primary'>Testimonial</h1>
							<hr className='w-100'></hr>
							<blockquote className='blockquote text-dark'>
								<p className=''>“Best local barbershop. Its always busy on the weekends, but I always get a clean and sharp haircut. 
								If you visit during the week, there's typically no wait. This place is a one man show, and Bill always does a damn 
								good job”</p>
								<footer className='blockquote-footer'>Timothy Guarino</footer>
								<span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
							</blockquote>
						</div>
					</Carousel.Item>
					<Carousel.Item className='h-100 w-100'>
						<div className='d-block w-100 bg-light testimonial-slide'>
							<h1 className='ml-2 mt-2 text-primary'>Testimonial</h1>
							<hr className='w-100'></hr>
							<blockquote className='blockquote text-dark'>
								<p className=''>“Great place, the man knows what he's doing.  I could never find a good place to get my hair cut since 
								I moved back to NY, problem solved!”</p>
								<footer className='blockquote-footer'>Joe Withkowski</footer>
								<span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
							</blockquote>
						</div>
					</Carousel.Item>
					<Carousel.Item className='h-100 w-100'>
						<div className='d-block w-100 bg-light testimonial-slide'>
							<h1 className='ml-2 mt-2 text-primary'>Testimonial</h1>
							<hr className='w-100'></hr>
							<blockquote className='blockquote text-dark'>
								<p className=''>“If you've ever been offended don't come here. If your a man who wants a good hair cut at a real barbershop, this is the place.1”</p>
								<footer className='blockquote-footer'>Joel Fennelly</footer>
								<span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
							</blockquote>
						</div>
					</Carousel.Item>
					<Carousel.Item className='h-100 w-100'>
						<div className='d-block w-100 bg-light testimonial-slide'>
							<h1 className='ml-2 mt-2 text-primary'>Testimonial</h1>
							<hr className='w-100'></hr>
							<blockquote className='blockquote text-dark'>
								<p className=''>“Bill is a great source of entertainment, and he cuts a good haircut”</p>
								<footer className='blockquote-footer'>Rich Maxon</footer>
								<span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
							</blockquote>
						</div>
					</Carousel.Item>
					<Carousel.Item className='h-100 w-100'>
						<div className='d-block w-100 bg-light testimonial-slide'>
							<h1 className='ml-2 mt-2 text-primary'>Testimonial</h1>
							<hr className='w-100'></hr>
							<blockquote className='blockquote text-dark'>
								<p className=''>“He cuts it just the way you tell him and he remembers each time you get in the chair.”</p>
								<footer className='blockquote-footer'>Frank Lukovits</footer>
								<span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
							</blockquote>
						</div>
					</Carousel.Item>
					<Carousel.Item className='h-100 w-100'>
						<div className='d-block w-100 bg-light testimonial-slide'>
							<h1 className='ml-2 mt-2 text-primary'>Testimonial</h1>
							<hr className='w-100'></hr>
							<blockquote className='blockquote text-dark'>
								<p className=''>“Definitely a guys barber shop. You better have thick skin. The haircut is great”</p>
								<footer className='blockquote-footer'>Sean Doran</footer>
								<span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
							</blockquote>
						</div>
					</Carousel.Item>
					<Carousel.Item className='h-100 w-100'>
						<div className='d-block w-100 bg-light testimonial-slide'>
							<h1 className='ml-2 mt-2 text-primary'>Testimonial</h1>
							<hr className='w-100'></hr>
							<blockquote className='blockquote text-dark'>
								<p className=''>“This is where men get their hair cut.”</p>
								<footer className='blockquote-footer'>Matthew Timber</footer>
								<span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
							</blockquote>
						</div>
					</Carousel.Item>
				</Carousel>
			</Jumbotron>
			</div>
			)
	}
}

export default Testimonials;
import React from 'react';

import './Gallery.css';

import Figure from 'react-bootstrap/Figure';
import Jumbotron from 'react-bootstrap/Jumbotron';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




class Gallery extends React.Component {


	render() {

		return (
			<div id='gallery'>
				<h1 className='text-center display-4 mb-4'>Gallery</h1>
				<div className='container'>
				<Jumbotron className='col-md-10 mx-auto'>
					<div className='row'>
						<Figure className='col-6 col-md-3 gallery-figures ml-auto'>
							<Figure.Image src='https://i.postimg.cc/8ChpM6hw/insta-photo-2.jpg' className='w-100 h-100' />
						</Figure>
						<Figure className='col-6 col-md-3 gallery-figures'>
							<Figure.Image src='https://i.postimg.cc/ydj7rCpZ/insta-photo-3.jpg' className='w-100 h-100' />
						</Figure>
						<Figure className='col-6 col-md-3 gallery-figures mr-auto'>
							<Figure.Image src='https://i.postimg.cc/x8dnwpBF/insta-photo-4.jpg' className='w-100 h-100' />
						</Figure>
          </div>
          <div className='row'>
						<Figure className='col-6 col-md-3 gallery-figures ml-auto'>
							<Figure.Image src='https://i.postimg.cc/pr1RRYHV/insta-photo-5.jpg' className='w-100 h-100' />
						</Figure>
						<Figure className='col-6 col-md-3 gallery-figures'>
							<Figure.Image src='https://i.postimg.cc/CLzwJtGR/insta-photo-7.jpg' className='w-100 h-100' />
						</Figure>
						<Figure className='col-6 col-md-3 gallery-figures mr-auto'>
							<Figure.Image src='https://i.postimg.cc/ncgpWk20/insta-photo-8.jpg' className='w-100 h-100' />
						</Figure>
          </div>
          <div className='row'>
						<Figure className='col-6 col-md-3 gallery-figures ml-auto'>
							<Figure.Image src='https://i.postimg.cc/25HMt7f2/bill-and-angelo-edited.jpg' className='w-100 h-100' />
						</Figure>
						<Figure className='col-6 col-md-3 gallery-figures mr-auto'>
							<Figure.Image src='https://i.postimg.cc/h4CSLgdF/insta-photo-6.jpg' className='w-100 h-100' />
						</Figure>
					</div>
				</Jumbotron>
				</div>
			</div>
			)
	}
}

export default Gallery;
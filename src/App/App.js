import React from 'react';
import Loadable from 'react-loadable';

import Footer from '../Footer/Footer.js';

import './App.css';
import '../../css/bootstrap.css';

//import { ControlledCarousel } from '../Testimonials/Testimonials.js';

const HeaderComponent = Loadable({
	loader: () => import('../Header/Header.js'),
	loading: () => <div>Loading...</div>
})

const AboutComponent = Loadable({
	loader: () => import('../About/About.js'),
	loading: () => <div>Loading...</div>
})

const GalleryComponent = Loadable({
	loader: () => import('../Gallery/Gallery.js'),
	loading: () => <div>Loading...</div>
})

const TestimonialsComponent = Loadable({
	loader: () => import('../Testimonials/Testimonials.js'),
	loading: () => <div>Loading...</div>
})
/*
const FooterComponent = Loadable({
	loader: () => import('../Footer/Footer.js'),
	loading: () => <div>Loading...</div>
})

*/
class App extends React.Component {

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll, true)
	}

	/* A cross-browser attempt to add a class name 
	addClass() {
  		let element, name, arr;
  		element = document.getElementById("banner");
  		name = "shrink";
  		arr = element.className.split(" ");
  		if (arr.indexOf(name) == -1) {
    		element.className += " " + name;
  		}
	} */

	 /*A cross-browser attempt to remove a class name*/


	

	

	render() {

		return (
			<div id='app-main'>
				<HeaderComponent />
				<AboutComponent />
				<GalleryComponent />
				<TestimonialsComponent />
				<Footer />
			</div>
			)
	}
}

export default App;
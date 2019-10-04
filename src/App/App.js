import React from 'react';
import Loadable from 'react-loadable';

import './App.css';
import '../../css/bootstrap.css';

//import { ControlledCarousel } from '../Testimonials/Testimonials.js';

import Testimonials from '../Testimonials/Testimonials.js';

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

/*
const TestimonialsComponent = Loadable({
	loader: () => import('../Testimonials/Testimonials.js'),
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
	removeClass() {
  		let element = document.getElementById("banner");
  		element.className = element.className.replace(/\bshrink\b/g, "");
	} 

	addClass() {
  		var element = document.getElementById("myDIV");
  			element.classList.add("mystyle");
	}

	handleScroll() {
		//console.log('scrolling');
		if (document.documentElement.scrollTop > 781) {
			console.log(document.documentElement.scrollTop)
			document.getElementById('banner').classList.add('shrink')
			document.getElementById('banner1').classList.add('shrink1')
		} else {
			document.getElementById('banner').classList.remove('shrink')
			document.getElementById('banner1').classList.remove('shrink1')
	}
}

	

	

	render() {

		return (
			<div id='app-main'>
				<HeaderComponent />
				<AboutComponent />
				<GalleryComponent />
				<Testimonials />
			</div>
			)
	}
}

export default App;
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
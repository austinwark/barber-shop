import React from 'react';
import Loadable from 'react-loadable';

import './App.css';
import '../../css/bootstrap.css';




const HeaderComponent = Loadable({
	loader: () => import('../Header/Header.js'),
	loading: () => <div>Loading...</div>
})

const AboutComponent = Loadable({
	loader: () => import('../About/About.js'),
	loading: () => <div>Loading...</div>
})


class App extends React.Component {

	render() {

		return (
			<div id='app-main'>
				<HeaderComponent />
				<AboutComponent />
			</div>
			)
	}
}

export default App;
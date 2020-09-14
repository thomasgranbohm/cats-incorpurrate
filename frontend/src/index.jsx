import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './global.css';

import Gallery from "./components/Gallery"

import Header from './components/Header';

const App = () => {
	return (
		<div id="app">
			<Header />
			<Gallery />
		</div>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
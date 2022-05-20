import { React } from 'react';
import './App.scss';
import Heading from './components/heading';

const App = (context) =>
	<div className="App" role="App">
		<Heading { ...context }/>
	</div>;

export default App;

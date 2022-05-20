import { React } from 'react';
import './App.scss';
import Heading from './components/heading';
import Controls from './components/controls';

const App = (context) =>
	<div className="App" role="App">
		<Heading { ...context }/>
		<Controls/>
	</div>;

export default App;

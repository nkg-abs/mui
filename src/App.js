import { React } from 'react';
import './App.scss';
import Tab from './components/verticalTabs';

const App = (context) =>
	<div className="App" role="App">
		<Tab { ...context }/>
	</div>;

export default App;

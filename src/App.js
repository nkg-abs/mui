import { React } from 'react';
import './App.scss';
import Table from './components/table';

const App = (context) =>
	<div className="App" role="App">
		<Table { ...context }/>
	</div>;

export default App;

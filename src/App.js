import { React } from 'react';
import './App.scss';
import VerticalTab from './components/verticalTabs';

const App = (context) =>
	<div className="App" role="App">
		<VerticalTab { ...context }/>
	</div>;

export default App;

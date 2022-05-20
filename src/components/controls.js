import React from 'react';
import Sliders from './sliders';
import Paper from '@mui/material/Paper';
import Catergories from './categories';
import Navigation from './navigation';

const Controls = () =>
	<Paper display="flex" justifyContent="space-around">
		<Catergories/>
		<Sliders/>
		<Navigation/>
	</Paper>
	;

export default Controls;

import React from 'react';
import Sliders from './sliders';
import Paper from '@mui/material/Paper';
import Catergories from './categories';
import Navigation from './navigation';
import { Grid, Box } from '@mui/material';

const Controls = () =>
	<Paper spacing={ 2 } sx={ { p: 5 } }>
		<Box display="flex" justifyContent="space-between">
			<Grid container={ true }>
				<Grid item={ true } xs={ 4 }>
					<Catergories/>
				</Grid>
				<Grid item={ true } xs={ 4 }>
					<Sliders/>
				</Grid>
			</Grid>
			<Navigation/>
		</Box>
	</Paper>
	;

export default Controls;

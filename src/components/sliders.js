import React from 'react';
import {
	Slider,
} from '@material-ui/core';
import { Grid, Box } from '@mui/material';

// import VolumeUp from '@material-ui/icons/VolumeUp';

// eslint-disable-next-line max-lines-per-function
const Sliders = () => {
	const year = [
		{
			value: 0,
			label: '1000',
		},
		{
			value: 100,
			label: '2022',
		},
	];
	const bValue = [
		{
			value: 0,
			label: '0.45',
		},
		{
			value: 100,
			label: '0.99',
		},
	];
	const OR = [
		{
			value: 0,
			label: '0.45',
		},
		{
			value: 100,
			label: '0.99',
		},
	];

	return (
		<Grid container={ true } spacing={ 2 }>
			<Grid item={ true } xs={ 4 }>
				<Grid container={ true }>
					<Grid xs={ 6 }>
						<Box component="span">Year</Box>
					</Grid>
					<Grid xs={ 6 }>
						<Slider
							defaultValue={ 80 }
							aria-labelledby="discrete-slider-always"
							step={ 10 }
							marks={ year }
							valueLabelDisplay="on"
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item={ true } xs={ 4 }>
				<Grid container={ true }>
					<Grid xs={ 6 }>
						<Box component="span">B value</Box>
					</Grid>
					<Grid xs={ 6 }>
						<Slider
							defaultValue={ 80 }
							aria-labelledby="discrete-slider-always"
							step={ 10 }
							marks={ bValue }
							valueLabelDisplay="on"
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item={ true } xs={ 4 }>
				<Grid container={ true }>
					<Grid xs={ 6 }>
						<Box component="span">OR</Box>
					</Grid>
					<Grid xs={ 6 }>
						<Slider
							defaultValue={ 80 }
							aria-labelledby="discrete-slider-always"
							step={ 10 }
							marks={ OR }
							valueLabelDisplay="on"
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Sliders;

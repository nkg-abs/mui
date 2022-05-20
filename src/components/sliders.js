import React from 'react';
import {
	Slider, Typography, Box,
} from '@material-ui/core';
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
		<Box display="flex" justifyContent="space-between">
			<Box>
				<Typography id="discrete-slider-always" gutterBottom={ true }>
					Year
				</Typography>
				<Slider
					defaultValue={ 80 }
					// getAriaValueText={ valuetext }
					aria-labelledby="discrete-slider-always"
					step={ 10 }
					marks={ year }
					valueLabelDisplay="on"
				/>
			</Box>
			<Box>
				<Typography id="discrete-slider-always" gutterBottom={ true }>
					B value
				</Typography>
				<Slider
					defaultValue={ 80 }
					// getAriaValueText={ valuetext }
					aria-labelledby="discrete-slider-always"
					step={ 10 }
					marks={ bValue }
					valueLabelDisplay="on"
				/>
			</Box>
			<Box>
				<Typography id="discrete-slider-always" gutterBottom={ true }>
					OR
				</Typography>
				<Slider
					defaultValue={ 80 }
					// getAriaValueText={ valuetext }
					aria-labelledby="discrete-slider-always"
					step={ 10 }
					marks={ OR }
					valueLabelDisplay="on"
				/>
			</Box>
		</Box>
	);
};

export default Sliders;

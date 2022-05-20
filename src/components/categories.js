import React from 'react';
import {
	InputLabel, FormControl, Select,
	Box,
} from '@material-ui/core';

// eslint-disable-next-line max-lines-per-function
const Catergories = () =>
	<Box>
		<FormControl variant="outlined">
			<InputLabel
				htmlFor="outlined-age-native-simple"
			>
				Study Source
			</InputLabel>
			<Select
				native={ true }
				label="Age"
				inputProps={ {
					name: 'age',
					id: 'outlined-age-native-simple',
				} }
			>
				<option aria-label="None" value=""/>
				<option value={ 10 }>Ten</option>
				<option value={ 20 }>Twenty</option>
				<option value={ 30 }>Thirty</option>
			</Select>
		</FormControl>
		<FormControl variant="outlined">
			<InputLabel
				htmlFor="outlined-age-native-simple"
			>
				Trait Category
			</InputLabel>
			<Select
				native={ true }
				label="Age"
				inputProps={ {
					name: 'age',
					id: 'outlined-age-native-simple',
				} }
			>
				<option aria-label="None" value=""/>
				<option value={ 10 }>Ten</option>
				<option value={ 20 }>Twenty</option>
				<option value={ 30 }>Thirty</option>
			</Select>
		</FormControl>
		<FormControl variant="outlined">
			<InputLabel
				htmlFor="outlined-age-native-simple"
			>
				Trait
			</InputLabel>
			<Select
				native={ true }
				label="Age"
				inputProps={ {
					name: 'age',
					id: 'outlined-age-native-simple',
				} }
			>
				<option aria-label="None" value=""/>
				<option value={ 10 }>Ten</option>
				<option value={ 20 }>Twenty</option>
				<option value={ 30 }>Thirty</option>
			</Select>
		</FormControl>
	</Box>
	;

export default Catergories;

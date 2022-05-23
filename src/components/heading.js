/* eslint-disable max-len */
import React from 'react';
import {
	Box, Breadcrumbs, Link,
	Typography, Button, Grid,
	FormControl, Select, InputLabel,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HelpIcon from '@mui/icons-material/Help';
import BarChartIcon from '@mui/icons-material/BarChart';
import BackupTableIcon from '@mui/icons-material/BackupTable';

// eslint-disable-next-line max-lines-per-function
const Heading = ({ state: { view }, actions: { setView }}) =>
	<Grid container={ true } sx={ { p: 3	} }>
		<Grid xs={ 9 }>
			<Breadcrumbs separator="›" aria-label="breadcrumb">
				<Link color="inherit" href="/">
					Home
				</Link>
				<Typography color="textPrimary">
					Gene Centric: PCSK9
				</Typography>
			</Breadcrumbs>
		</Grid>
		<Grid xs={ 3 }>
			<Stack spacing={ 2 } direction="row">
				<FormControl
					variant="outlined"
					sx={ { mr: 5, p: 0 } }
				>
					<InputLabel
						htmlFor="outlined-age-native-simple"
					>
						<ArrowDownwardIcon/>
						<Box component="span">Download</Box>
					</InputLabel>
					<Select
						native={ true }
						label="Age"
						displayEmpty={ true }
						inputProps={ {
							'name': 'age',
							'id': 'outlined-age-native-simple',
							'aria-label': 'Without label',
						} }
					>
						<option aria-label="None" value=""/>
						<option value={ 10 }>JSON</option>
						<option value={ 20 }>CSV</option>
					</Select>
				</FormControl>
				<Button
					variant="outlined"
					onClick={ setView }
				>
					{ view === 'plot'
						? <BarChartIcon/>
						: <BackupTableIcon/>} { view } </Button>
				<Button><HelpIcon/></Button>
			</Stack>
		</Grid>
	</Grid>
	;

export default Heading;

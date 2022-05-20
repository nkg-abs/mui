/* eslint-disable max-len */
import React from 'react';
import {
	Box, Breadcrumbs, Link,
	Typography, Button, ButtonGroup,
	FormControl, Select, InputLabel,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HelpIcon from '@mui/icons-material/Help';
import BarChartIcon from '@mui/icons-material/BarChart';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// eslint-disable-next-line max-lines-per-function
const Heading = ({ state: { view }, actions: { setView }}) => {
	const theme = createTheme({
		spacing: 8,
	});

	return (
		<ThemeProvider theme={ theme }>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Breadcrumbs separator="›" aria-label="breadcrumb">
					<Link color="inherit" href="/">
						Home
					</Link>
					<Typography color="textPrimary">
						Gene Centric: PCSK9
					</Typography>
				</Breadcrumbs>
				<Box display="flex" sx={ { p: 1 } }>
					<FormControl variant="outlined" sx={ { mr: 1, p: 0 } }>
						<InputLabel
							htmlFor="outlined-age-native-simple"
						>
							<ArrowDownwardIcon/> Download
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
						sx={ { mr: 1, p: 0.5 } }
					>
						{ view === 'plot'
							? <BarChartIcon/>
							: <BackupTableIcon/>} { view } </Button>
					<ButtonGroup color="primary">
						<Button><HelpIcon/></Button>
					</ButtonGroup>
				</Box>
			</Box>
		</ThemeProvider>

	);
};

export default Heading;

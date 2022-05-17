/* eslint-disable indent */
/* eslint-disable no-magic-numbers */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TabManager from '../services/tabManager';

// eslint-disable-next-line max-lines-per-function
const TabPanel = (context) => {
	const {
		state: { value },
		patchState,
		data,
	} = context;

	const { label, index, color, click, ...other } = data;
	const variant = click ? 'outlined' : 'contained';

	return (
		<div
			key={ index }
			role="tabpanel"
			hidden={ value !== index }
			id={ `simple-tabpanel-${ index }` }
			aria-labelledby={ `simple-tab-${ index }` }
			{ ...other }
		>
			{value === index
        && <Box p={ 3 }>
	<Button
		variant={ variant }
		color={ color }
		onClick={ () => patchState({ tabPanels:
			TabManager.getTabPanel({ ...context, data }) }) }
	>
		{label}
	</Button>
        </Box>}
		</div>
	);
};

// eslint-disable-next-line id-match
const a11yProps = (index) => ({
	'id': `simple-tab-${ index }`,
	'aria-controls': `simple-tabpanel-${ index }`,
});

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

// eslint-disable-next-line max-lines-per-function
const SimpleTabs = (context) => {
	const { state: { value, tabPanels }, patchState } = context;
	const classes = useStyles();

	const v = ['one', 'two', 'three'];

	return (
		<div className={ classes.root }>
			<AppBar position="static">
				<Tabs
					value={ v.indexOf(value) }
					onChange={ (dummy, data) => patchState({ value: v[data] }) }
					aria-label="simple tabs example"
				>
					<Tab label="Item One" { ...a11yProps(0) }/>
					<Tab label="Item Two" { ...a11yProps(1) }/>
					<Tab label="Item Three" { ...a11yProps(2) }/>
				</Tabs>
			</AppBar>
			{tabPanels.map((data) => TabPanel({ ...context, data }))}
		</div>
	);
};

export default SimpleTabs;

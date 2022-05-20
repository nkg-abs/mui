
import React from 'react';
import { Box, Button, ButtonGroup, TextareaAutosize } from '@material-ui/core';

const textareaStyle = {
	width: '90vw',
	fontWeight: 'bold',
	fontSize: 'xxx-large',
};

const DemoToolBar = () =>
	<Box>
		<Box display="flex" justifyContent="space-between">
			<ButtonGroup color="secondary" size="large">
				<Button>Home</Button>
				<Button>About</Button>
				<Button>Page</Button>
				<Button>Contact</Button>
			</ButtonGroup>
			<ButtonGroup color="primary" size="large">
				<Button>Table</Button>
				<Button>Plot</Button>
			</ButtonGroup>
		</Box>
		<Box bgcolor="primary.main" m={ 1 }>
			<TextareaAutosize style={ textareaStyle }	minRows={ 6 }/>
		</Box>
	</Box>;

export default DemoToolBar;

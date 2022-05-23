import React from 'react';
import { Button } from '@material-ui/core';
import ReplayIcon from '@mui/icons-material/Replay';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';

const Navigation = () =>
	<Box>
		<Stack spacing={ 2 } sx={ { '& > button': { p: 1.5 }} } direction="row">
			<Button
				variant="outlined"
			><ReplayIcon/> Reload</Button>
			<Button variant="outlined"><MoreHorizIcon/></Button>
		</Stack>
	</Box>;

export default Navigation;

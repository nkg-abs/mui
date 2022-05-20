import React from 'react';
import { Button } from '@material-ui/core';
import ReplayIcon from '@mui/icons-material/Replay';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navigation = () =>
	<>
		<Button variant="outlined"><ReplayIcon/> Reload</Button>
		<Button variant="outlined"><MoreHorizIcon/></Button>
		<Button variant="outlined">G</Button>
	</>;

export default Navigation;

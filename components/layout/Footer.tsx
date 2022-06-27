import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer: FC = () => {
	return (
		<AppBar position='static'>
			<Toolbar
				sx={{
					justifyContent: 'center',
				}}
			>
				<Typography variant="subtitle1">Copright © {new Date().getFullYear()} Cyper Pro</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;

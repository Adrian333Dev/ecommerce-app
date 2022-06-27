import { AppBar, Button, ButtonGroup, Toolbar } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Navbar: FC = () => {
	const router = useRouter();
	return (
		<AppBar position='fixed' color='primary'>
			<Toolbar sx={{ gap: 2 }}>
				<Button sx={{ fontSize: 20 }} onClick={() => router.push('/')}>
					Cyper Pro
				</Button>

				<div style={{ flexGrow: 1 }} />
				<ButtonGroup size='large'>
					<Button onClick={() => router.push('/cart')}>Cart</Button>
					<Button onClick={() => router.push('/sign-in')}>Sign In</Button>
				</ButtonGroup>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

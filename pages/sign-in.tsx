import { FC, useState } from 'react';
import {
	Box,
	Container,
	Avatar,
	Typography,
	TextField,
	Button,
	Grid,
	Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Layout } from '../components/exports';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from '../utility/firebase/firebase';

const SignIn: FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const res = await signInAuthUserWithEmailAndPassword(email, password);
			console.log(res);
		} catch (error: any) {
			console.error('Error signing in', error?.message);
		}
	};

	return (
		<>
			<Layout title='Sign In'>
				<Container component='main' maxWidth='xs'>
					<Box
						sx={{
							marginTop: 8,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Sign in
						</Typography>
						<Box
							component='form'
							onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 1 }}
						>
							<TextField
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								autoFocus
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href='#' variant='body2'>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href='#' variant='body2'>
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</Layout>
		</>
	);
};

export default SignIn;

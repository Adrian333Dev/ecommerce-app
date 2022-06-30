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
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../utility/firebase/firebase';

const initialData = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUp: FC = () => {
	const [data, setData] = useState(initialData);
	const { displayName, email, password, confirmPassword } = data;

	const resetData = () => {
		setData(initialData);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		try {
			const res = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(res?.user, { displayName });
			resetData();
		} catch (error: any) {
			console.error('Error creating user', error.message);
		}
		resetData();
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	return (
		<>
			<>
				<Layout title='Sign Up'>
					<Container component='main' maxWidth='xs'>
						<Box
							sx={{
								marginTop: 4,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
								<LockOutlinedIcon />
							</Avatar>
							<Typography component='h1' variant='h5'>
								Sign up
							</Typography>
							<Box
								component='form'
								noValidate
								onSubmit={handleSubmit}
								sx={{ mt: 3 }}
							>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											autoComplete='given-name'
											name='displayName'
											required
											fullWidth
											label='Display Name'
											autoFocus
											onChange={handleChange}
											value={displayName}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											label='Email Address'
											name='email'
											autoComplete='email'
											onChange={handleChange}
											value={email}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											name='password'
											label='Password'
											type='password'
											autoComplete='new-password'
											onChange={handleChange}
											value={password}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											name='confirmPassword'
											label='Confirm Password'
											type='password'
											autoComplete='new-password'
											onChange={handleChange}
											value={confirmPassword}
										/>
									</Grid>
								</Grid>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									sx={{ mt: 3, mb: 2 }}
								>
									Sign Up
								</Button>
								<Grid container justifyContent='flex-end'>
									<Grid item>
										<Link href='#' variant='body2'>
											Already have an account? Sign in
										</Link>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Container>
				</Layout>
			</>
		</>
	);
};

export default SignUp;

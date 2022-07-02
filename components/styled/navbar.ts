import { alpha, Box, Button, InputBase, styled } from '@mui/material';

export const MainNav = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	paddingTop: '0.5rem',
}));

export const SearchbarWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
}));

export const SearchInput = styled(InputBase)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.dark,
	borderTopLeftRadius: 5,
	borderBottomLeftRadius: 5,
	padding: 2,
	width: '100%',
	maxWidth: '500px',
}));

export const SearchButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.dark,
	paddingInline: 0,
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
}));

import { Box, Card, styled } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
	maxWidth: 223,
	minWidth: 200,
	aspectRatio: '1 / 1.6',
	flex: '1 0 auto',
	padding: '0.5rem 1rem',
	position: 'relative',
	'& img': {
		maxWidth: '100%',
		maxHeight: '100%',
	},
}));
export const CardBody = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100%',
	display: 'grid',
	gridTemplateColumns: '1fr',
	gridTemplateRows: '1fr 1fr 1fr',
}));

export const ImgContainer = styled(Box)(({ theme }) => ({
	gridRow: '1 / 3',
	display: 'flex',
	justifyContent: 'center',
	padding: '1.5rem',
	paddingBottom: 0,
	'& > img': {
		height: '100%',
		borderRadius: '10px',
	},
}));

export const Content = styled(Box)(({ theme }) => ({
	gridRow: '3 / 4',
	paddingTop: '1rem',
	paddingBottom: 2,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
}));

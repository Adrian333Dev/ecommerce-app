import { FC } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const ProductItem: FC<any> = ({ prod: { image, name, price, slug } }) => {
	const router = useRouter();
	return (
		<Paper
			sx={{
				'&:hover': {
					cursor: 'pointer',
				},
				display: 'flex',
				flexDirection: 'column',
				borderRadius: 1,
			}}
		>
			<Box
				sx={{
					aspectRatio: '1 / 1',
					overflow: 'hidden',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					'& img': {
						width: '100%',
					},
				}}
			>
				<img
					src={image}
					alt={name}
					onClick={() => router.push(`/product/${slug}`)}
				/>
			</Box>
			<Box p={1}>
				<Typography>{name}</Typography>
				<Typography>{price}</Typography>
				<Button variant='contained' color='primary'>
					Add to Cart
				</Button>
			</Box>
		</Paper>
	);
};

export default ProductItem;

import { Box, Grid, MenuItem } from '@mui/material';
import { FC } from 'react';

import { phones } from '../../utility/data/products';
import ProductItem from './ProductItem';

const Products: FC = () => {
	return (
		<>
			{phones.map((phone) => (
				<ProductItem key={phone.id} product={phone} />
			))}
		</>
	);
};

const SlidingProductList: FC = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'nowrap',
				overflowX: 'scroll',
				'&::-webkit-scrollbar': {
					display: 'none',
				},
				gap: 1,
			}}
		>
			<Products />
		</Box>
	);
};

export default SlidingProductList;

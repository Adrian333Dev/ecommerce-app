import { FC } from 'react';
import { Box, Button, Grid, MenuItem, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { phones } from '../../utility/data/products';
import ProductItem from './ProductItem';
import {
	IHeadphone,
	ILaptop,
	IPhone,
	ITablet,
	IWatch,
} from '../../models/IProduct';

interface Props {
	title: string;
	products: IPhone[] | ILaptop[] | ITablet[] | IHeadphone[] | IWatch[];
}

const SlidingProductList: FC<Props> = ({ products, title }) => {
	const Products: FC = () => {
		return (
			<>
				{products.map((prod) => (
					<ProductItem key={prod.id} product={prod} />
				))}
			</>
		);
	};

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingBlock: 2,
				}}
			>
				<Typography textTransform={'uppercase'} fontSize={20}>
					{title}
				</Typography>
				<Button endIcon={<ChevronRightIcon />}>More</Button>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'nowrap',
					overflowX: 'scroll',
					'&::-webkit-scrollbar': {
						display: 'none',
					},
					gap: 1,
					paddingBottom: 5,
				}}
			>
				<Products />
			</Box>
		</>
	);
};

export default SlidingProductList;

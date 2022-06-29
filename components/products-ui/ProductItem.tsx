import { FC } from 'react';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Checkbox,
	Typography,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { ILaptop, IPhone, ITablet, IWatch } from '../../models/IProduct';

interface ProductItemProps {
	product: IPhone | ITablet | ILaptop | IWatch;
}

const ProductItem: FC<ProductItemProps> = ({
	product: {
		name,
		image,
		cost: { price, currency },
	},
}) => {
	return (
		<Card sx={{ maxWidth: 350, minWidth: 280, position: 'relative' }}>
			<Checkbox
				icon={<FavoriteBorder fontSize='large' />}
				checkedIcon={
					<Favorite
						fontSize='large'
						sx={{
							color: pink.A400,
						}}
					/>
				}
				sx={{
					position: 'absolute',
					top: 5,
					right: 5,
				}}
			/>
			<CardMedia
				component='img'
				image={image}
				alt={name}
				sx={{
					aspectRatio: '1 / 1',
				}}
			/>
			<CardContent>
				<Typography variant='h6' mb={1}>
					{name}
				</Typography>
				<Typography fontSize={19}>
					{price} {currency}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ProductItem;

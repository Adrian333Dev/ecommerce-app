import { FC } from 'react';
import { Box, Checkbox, Rating, Typography, IconButton } from '@mui/material';
import { pink } from '@mui/material/colors';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

import { ILaptop, IPhone, ITablet, IWatch } from '../../models/IProduct';
import {
	CardBody,
	Content,
	ImgContainer,
	StyledCard,
} from '../styled/product-item';
import { useRouter } from 'next/router';

interface ProductItemProps {
	product: IPhone | ITablet | ILaptop | IWatch;
}

export const FavoriteButton: FC = () => {
	return (
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
				zIndex: 1,
			}}
		/>
	);
};

const ProductItem: FC<ProductItemProps> = ({
	product: {
		name,
		image,
		slug,
		category,
		cost: { price, currency },
	},
}) => {
	const router = useRouter();

	const route = () => router.push(`/products/${category}/${slug}`);

	return (
		<StyledCard>
				<CardBody>
					<FavoriteButton />
					<ImgContainer onClick={route}>
						<img src={image} alt={name} />
					</ImgContainer>
					<Content>
						<Typography fontSize={17} onClick={route}>
							{name}
						</Typography>
						<Rating name='read-only' value={0} readOnly size='small' />
						<Box sx={{ flexGrow: 1 }} />
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Typography fontSize={15}>
								{price} {currency}
							</Typography>
							<IconButton className='btn-type'>
								<AddShoppingCartOutlinedIcon />
							</IconButton>
						</Box>
					</Content>
				</CardBody>
		</StyledCard>
	);
};

export default ProductItem;

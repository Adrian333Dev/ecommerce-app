import {
	Box,
	Button,
	Divider,
	Fab,
	Rating,
	Tooltip,
	Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { FC, useState } from 'react';
import { ProductProp } from '../../models/IProduct';

const ProductDetails: FC<ProductProp> = ({ product }) => {
	const {
		name,
		description,
		type,
		rating,
		numReviews,
		reviews,
		stock,
		cost: { price, discount, currency },
		specs: {
			color,
			storage,
			ram,
			screenSize,
			screenResolution,
			battery,
			camera,
			cpu,
			gpu,
		},
		variants: { colors, storage: storages, ram: rams },
	} = product;
	const [selectedColor, setSelectedColor] = useState(color);
	const [selectedStorage, setSelectedStorage] = useState(storage);
	const [selectedRam, setSelectedRam] = useState(ram);
	const [count, setCount] = useState(1);

	const Increment = () => {
		if (count < stock) {
			setCount((prev) => prev + 1);
		}
	};

	const Decrement = () => {
		if (count > 1) {
			setCount((prev) => prev - 1);
		}
	};

	const StorageOrRam: FC<any> = ({ title, items, selected, setSelected }) => {
		return (
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} py={1}>
				<Typography variant='h6'>{title}: </Typography>
				{items.map((item: number) => (
					<Box
						px={2}
						py={1}
						sx={{
							backgroundColor:
								item === selected ? 'primary.dark' : 'transparent',
							color: item === selected ? 'white' : 'text.primary',
							borderRadius: 1,
							border: '1px solid #fff',
						}}
						key={item}
						onClick={() => setSelected(item)}
					>
						<Typography>{item} GB</Typography>
					</Box>
				))}
			</Box>
		);
	};

	const Color: FC = () => {
		return (
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} py={1}>
				<Typography variant='h6'>Color: </Typography>
				{colors.map((clr: { name: string; hex: string }) => (
					<Tooltip title={clr.name}>
						<Box
							sx={{
								width: '42px',
								height: '42px',
								borderRadius: '50%',
								backgroundColor: clr.hex,
								outline:
									clr.name === selectedColor
										? '2px solid #fff'
										: '1px solid #ccc',
							}}
							key={clr.name}
							onClick={() => setSelectedColor(clr.name)}
						/>
					</Tooltip>
				))}
			</Box>
		);
	};

	const Details: FC = () => {
		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 1,
				}}
			>
				<Typography fontSize={{ xs: 18, md: 22 }}>
					{name} {type}, {storage} GB Storage, {ram} GB Ram, {screenSize} Inch{' '}
					{screenResolution[0]} by {screenResolution[1]} Screen, {battery} mAh
					Battery, {camera} MP Camera, {cpu} CPU, {gpu} GPU, ({color})
				</Typography>
				<Box display='flex' alignItems={'center'} gap={1}>
					<Rating name='read-only' value={rating} readOnly />
					<Typography>({numReviews} ratings)</Typography>
					<Typography>{reviews.length} Reviews</Typography>
				</Box>
				{discount > 0 && (
					<Typography
						sx={{
							textDecoration: 'line-through',
							color: 'text.secondary',
						}}
					>
						{price - discount}
					</Typography>
				)}
				<Typography
					sx={{
						fontSize: '1.2rem',
						color: discount > 0 ? red[400] : 'text.primary',
					}}
				>
					{price} {currency}
				</Typography>
			</Box>
		);
	};

	const Variants: FC = () => {
		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 1,
				}}
			>
				<Color />
				<StorageOrRam
					title='Memory'
					items={rams}
					selected={selectedRam}
					setSelected={setSelectedRam}
				/>
				<StorageOrRam
					title='Storage'
					items={storages}
					selected={selectedStorage}
					setSelected={setSelectedStorage}
				/>
			</Box>
		);
	};

	return (
		<>
			<Details />
			<Divider sx={{ marginBlock: 2 }} />
			<Variants />
			<Divider sx={{ marginBlock: 2 }} />
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
				<Fab color='primary' onClick={Decrement}>
					<RemoveIcon />
				</Fab>
				<Typography>{count}</Typography>
				<Fab color='primary' onClick={Increment}>
					<AddIcon />
				</Fab>
				<Button
					startIcon={<ShoppingCartOutlinedIcon />}
					variant={'contained'}
					size={'large'}
				>
					Add To Cart
				</Button>
			</Box>
		</>
	);
};

export default ProductDetails;

import { IPhone } from './../../models/IProduct';
import { galleries, images } from './galleries';
import { descriptions } from './descriptions';
import { colors } from './specs';

export const products: any = [];

// ! 1. iphone-13-pro
// ! 2. iphone-13
// ! 3. iphone-se
// ! 4. iphone-12
// ! 5. iphone-11

// ! 6. ipad-pro
// ! 7. ipad-air
// ! 8. ipad
// ! 9. ipad-mini

// ! 10. macbook-air-with-m1
// ! 11. macbook-air-with-m2
// ! 12. macbook-pro-13
// ! 13. macbook-pro-14
// ! 14. macbook-pro-16

// ! 15. apple-watch-series-7
// ! 16. apple-watch-se
// ! 17. apple-watch-series-3
// ! 18. apple-watch-nike

// ! 19. airpods-2
// ! 20. airpods-3
// ! 21. airpods-pro
// ! 22. airpods-max

// ! 23. xps-13-plus
// ! 24. hp-pavilion-aero
// ! 25. hp-spectre-x360

// ! 26. galaxy-a53-5g
// ! 27. galaxy-a03s

// ! 28. boat-watch-wave-pro

// ! 29. galaxy-tab-08

// ! 30. wh-1000xm4

export const phones: IPhone[] = [
	{
		id: 1,
		name: 'iPhone 13 Pro',
		price: 999,
		discount: 0,
		description: descriptions['iphone-13-pro'],
		image: images['iphone-13-pro'],
		category: 'smartphone',
		gallery: galleries['iphone-13-pro'],
		rating: 4.5,
		brand: 'Apple',
		screenSize: 6.1,
		screenResolution: '2778x1284',
		ram: 6,
		storage: 128,
		camera: 12,
		cpu: 'Apple A15 Bionic',
		battery: 3095,
		gpu: '5-core',
		color: 'Alpine Green',
		variations: {
			colors: [
				colors['alpine-green'],
				colors['silver'],
				colors['gold'],
				colors['graphite'],
				colors['sierra-blue'],
			],
			storage: [128, 256, 512, 1024],
		},
	},
	{
		id: 2,
		name: 'iPhone 13',
		price: 799,
		discount: 0,
		description: descriptions['iphone-13'],
		image: images['iphone-13'],
		category: 'smartphone',
		gallery: galleries['iphone-13'],
		rating: 4.5,
		brand: 'Apple',
		screenSize: 6.1,
		screenResolution: '2532x1170',
		ram: 4,
		storage: 128,
		camera: 12,
		cpu: 'Apple A15 Bionic',
		battery: 3227,
		gpu: '5-core',
		color: 'Red',
		variations: {
			colors: [
				colors['red'],
				colors['pink'],
				colors['blue'],
				colors['green'],
				colors['midnight'],
				colors['starlight'],
			],
			storage: [128, 256, 512],
		},
	},
	{
		id: 3,
		name: 'iPhone SE',
		price: 699,
		discount: 0,
		description: descriptions['iphone-se'],
		image: images['iphone-se'],
		category: 'smartphone',
		gallery: galleries['iphone-se'],
		rating: 4.5,
		brand: 'Apple',
		screenSize: 4.7,
		screenResolution: '1125x2436',
		ram: 4,
		storage: 128,
		camera: 12,
		cpu: 'Apple A15 Bionic',
		battery: 3095,
		gpu: '4-core',
		color: 'Red',
		variations: {
			colors: [
				colors['red'],
				colors['starlight'],
				colors['midnight'],
			],
			storage: [64,128, 256],
		}
	},
	{
		id: 4,
		name: 'iPhone 12',
		price: 699,
		discount: 0,
		description: descriptions['iphone-12'],
		image: images['iphone-12'],
		category: 'smartphone',
		gallery: galleries['iphone-12'],
		rating: 4.5,
		brand: 'Apple',
		screenSize: 6.1,
		screenResolution: '2778x1284',
		ram: 4,
		storage: 128,
		camera: 12,
		cpu: 'Apple A15 Bionic',
		battery: 3095,
		gpu: '5-core',
		color: 'Red',
	},
	{
		id: 5,
		name: 'iPhone 11',
		price: 599,
		discount: 0,
		description: descriptions['iphone-11'],
		image: images['iphone-11'],
		category: 'smartphone',
		gallery: galleries['iphone-11'],
		rating: 4.5,
		brand: 'Apple',
	},
	{
		id: 6,
		name: 'Samsung Galaxy A53 5G',
		price: 499,
		discount: 0,
		description: descriptions['galaxy-a53-5g'],
		image: images['galaxy-a53-5g'],
		category: 'smartphone',
		gallery: galleries['galaxy-a53-5g'],
		rating: 4.5,
		brand: 'Samsung',
	},
	{
		id: 7,
		name: 'Samsung Galaxy A03s',
		price: 499,
		discount: 0,
		description: descriptions['galaxy-a03s'],
		image: images['galaxy-a03s'],
		category: 'smartphone',
		gallery: galleries['galaxy-a03s'],
		rating: 4.5,
		brand: 'Samsung',
	},
];

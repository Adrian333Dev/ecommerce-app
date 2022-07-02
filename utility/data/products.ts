import {
	IHeadphone,
	ILaptop,
	IPhone,
	ITablet,
	IWatch,
} from './../../models/IProduct';
import { galleries, images } from './galleries';
import { descriptions } from './descriptions';
import { colors } from './specs';

// ! 22. airpods-max

// ! 30. wh-1000xm4

export const phones: IPhone[] = [
	{
		id: 1,
		name: 'iPhone 13 Pro',
		slug: 'iphone-13-pro',
		brand: 'Apple',
		category: 'smartphone',
		description: descriptions['iphone-13-pro'],
		image: images['iphone-13-pro'],
		gallery: galleries['iphone-13-pro'],
		rating: 4.5,
		stock: 14,
		cost: {
			price: 1099,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 6.1,
			screenResolution: [100, 100],
			ram: 6,
			storage: 128,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Alpine Green',
		},
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
		slug: 'iphone-13',
		brand: 'Apple',
		category: 'smartphone',
		description: descriptions['iphone-13'],
		image: images['iphone-13'],
		gallery: galleries['iphone-13'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 1299,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 6.1,
			screenResolution: [100, 100],
			ram: 4,
			storage: 128,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3227,
			gpu: '5-core',
			color: 'Red',
		},
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
		slug: 'iphone-se',
		brand: 'Apple',
		category: 'smartphone',
		description: descriptions['iphone-se'],
		image: images['iphone-se'],
		gallery: galleries['iphone-se'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 799,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 5.8,
			screenResolution: [100, 100],
			ram: 4,
			storage: 128,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '4-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['red'], colors['starlight'], colors['midnight']],
			storage: [64, 128, 256],
		},
	},
	{
		id: 4,
		name: 'iPhone 12',
		slug: 'iphone-12',
		brand: 'Apple',
		category: 'smartphone',
		description: descriptions['iphone-12'],
		image: images['iphone-12'],
		gallery: galleries['iphone-12'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 999,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 6.1,
			screenResolution: [100, 100],
			ram: 4,
			storage: 128,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [
				colors['green'],
				colors['purple'],
				colors['blue'],
				colors['white'],
				colors['black'],
				colors['red'],
			],
			storage: [64, 128, 256],
		},
	},
	{
		id: 5,
		name: 'iPhone 11',
		slug: 'iphone-11',
		brand: 'Apple',
		category: 'smartphone',
		description: descriptions['iphone-11'],
		image: images['iphone-11'],
		gallery: galleries['iphone-11'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 899,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 6.1,
			screenResolution: [100, 100],
			ram: 4,
			storage: 128,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [
				colors['green'],
				colors['purple'],
				colors['white'],
				colors['black'],
				colors['red'],
				colors['yellow'],
			],
			storage: [64, 128, 256],
		},
	},
	{
		id: 6,
		name: 'Samsung Galaxy A53 5G',
		slug: 'samsung-galaxy-a53-5g',
		brand: 'Samsung',
		category: 'smartphone',
		description: descriptions['galaxy-a53-5g'],
		image: images['galaxy-a53-5g'],
		gallery: galleries['galaxy-a53-5g'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 599,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 6.1,
			screenResolution: [100, 100],
			ram: 4,
			storage: 128,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [
				colors['peach'],
				colors['blue'],
				colors['black'],
				colors['white'],
			],
			storage: [32, 64, 128, 256],
		},
	},
	{
		id: 7,
		name: 'Samsung Galaxy A03s',
		slug: 'samsung-galaxy-a03s',
		brand: 'Samsung',
		category: 'smartphone',
		description: descriptions['galaxy-a03s'],
		image: images['galaxy-a03s'],
		gallery: galleries['galaxy-a03s'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 399,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 6.1,
			screenResolution: [100, 100],
			ram: 4,
			storage: 64,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['blue'], colors['black'], colors['white']],
			storage: [32, 64],
		},
	},
];

export const tablets: ITablet[] = [
	{
		id: 8,
		name: 'iPad Pro',
		slug: 'ipad-pro',
		brand: 'Apple',
		category: 'tablet',
		description: descriptions['ipad-pro'],
		image: images['ipad-pro'],
		gallery: galleries['ipad-pro'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 999,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 6.1,
			screenResolution: [100, 100],
			ram: 4,
			storage: 128,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
		},
	},
	{
		id: 9,
		name: 'iPad Air',
		slug: 'ipad-air',
		brand: 'Apple',
		category: 'tablet',
		description: descriptions['ipad-air'],
		image: images['ipad-air'],
		gallery: galleries['ipad-air'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 6.1,
			screenResolution: [100, 100],
			ram: 4,
			storage: 128,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
		},
	},
	{
		id: 10,
		name: 'iPad',
		slug: 'ipad',
		brand: 'Apple',
		category: 'tablet',
		description: descriptions['ipad'],
		image: images['ipad'],
		gallery: galleries['ipad'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 6.1,
			screenResolution: [100, 100],
			ram: 4,
			storage: 128,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
		},
	},
	{
		id: 11,
		name: 'IPad Mini',
		slug: 'ipad-mini',
		brand: 'Apple',
		category: 'tablet',
		description: descriptions['ipad-mini'],
		image: images['ipad-mini'],
		gallery: galleries['ipad-mini'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 6.1,
			screenResolution: [100, 100],
			ram: 4,
			storage: 128,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
		},
	},
	{
		id: 12,
		name: 'Samsung Galaxy Tab 08',
		slug: 'samsung-galaxy-tab-08',
		brand: 'Samsung',
		category: 'tablet',
		description: descriptions['galaxy-tab-08'],
		image: images['galaxy-tab-08'],
		gallery: galleries['galaxy-tab-08'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 6.1,
			screenResolution: [100, 100],
			ram: 4,
			storage: 128,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
		},
	},
];

export const laptops: ILaptop[] = [
	{
		id: 13,
		name: 'MacBook Air with M1',
		slug: 'macbook-air-with-m1',
		brand: 'Apple',
		category: 'laptop',
		description: descriptions['macbook-air-with-m1'],
		image: images['macbook-air-with-m1'],
		gallery: galleries['macbook-air-with-m1'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 13.3,
			screenResolution: [100, 100],
			ram: 8,
			storage: 256,
			camera: 12,
			cpu: 'Apple M1',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
			ram: [8, 16, 32],
		},
	},
	{
		id: 14,
		name: 'MacBook Air with M2',
		slug: 'macbook-air-with-m2',
		brand: 'Apple',
		category: 'laptop',
		description: descriptions['macbook-air-with-m2'],
		image: images['macbook-air-with-m2'],
		gallery: galleries['macbook-air-with-m2'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 13.3,
			screenResolution: [100, 100],
			ram: 8,
			storage: 256,
			camera: 12,
			cpu: 'Apple M2',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
			ram: [8, 16, 32],
		},
	},
	{
		id: 15,
		name: 'MacBook Pro 13',
		slug: 'macbook-pro-13',
		brand: 'Apple',
		category: 'laptop',
		description: descriptions['macbook-pro-13'],
		image: images['macbook-pro-13'],
		gallery: galleries['macbook-pro-13'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 13.3,
			screenResolution: [100, 100],
			ram: 8,
			storage: 256,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
			ram: [8, 16, 32],
		},
	},
	{
		id: 16,
		name: 'MacBook Pro 14',
		slug: 'macbook-pro-14',
		brand: 'Apple',
		category: 'laptop',
		description: descriptions['macbook-pro-14'],
		image: images['macbook-pro-14'],
		gallery: galleries['macbook-pro-14'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 13.3,
			screenResolution: [100, 100],
			ram: 8,
			storage: 256,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
			ram: [8, 16, 32],
		},
	},
	{
		id: 17,
		name: 'MacBook Pro 16',
		slug: 'macbook-pro-16',
		brand: 'Apple',
		category: 'laptop',
		description: descriptions['macbook-pro-16'],
		image: images['macbook-pro-16'],
		gallery: galleries['macbook-pro-16'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 13.3,
			screenResolution: [100, 100],
			ram: 8,
			storage: 256,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
			ram: [8, 16, 32],
		},
	},
	{
		id: 18,
		name: 'Dell XPS 13 Plus',
		slug: 'xps-13-plus',
		brand: 'Dell',
		category: 'laptop',
		description: descriptions['xps-13-plus'],
		image: images['xps-13-plus'],
		gallery: galleries['xps-13-plus'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 13.3,
			screenResolution: [100, 100],
			ram: 8,
			storage: 256,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
			ram: [8, 16, 32],
		},
	},
	{
		id: 19,
		name: 'HP Pavilion Aero',
		slug: 'hp-pavilion-aero',
		brand: 'HP',
		category: 'laptop',
		description: descriptions['hp-pavilion-aero'],
		image: images['hp-pavilion-aero'],
		gallery: galleries['hp-pavilion-aero'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 13.3,
			screenResolution: [100, 100],
			ram: 8,
			storage: 256,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
			ram: [8, 16, 32],
		},
	},
	{
		id: 20,
		name: 'HP Spectre X360',
		slug: 'hp-spectre-x360',
		brand: 'HP',
		category: 'laptop',
		description: descriptions['hp-spectre-x360'],
		image: images['hp-spectre-x360'],
		gallery: galleries['hp-spectre-x360'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {
			screenSize: 13.3,
			screenResolution: [100, 100],
			ram: 8,
			storage: 256,
			camera: 12,
			cpu: 'Apple A15 Bionic',
			battery: 3095,
			gpu: '5-core',
			color: 'Red',
		},
		variations: {
			colors: [colors['green'], colors['purple'], colors['blue']],
			storage: [64, 128, 256],
			ram: [8, 16, 32],
		},
	},
];

export const watches: IWatch[] = [
	{
		id: 21,
		name: 'Apple Watch Series 7',
		slug: 'apple-watch-series-7',
		brand: 'Apple',
		category: 'watch',
		description: descriptions['apple-watch-series-7'],
		image: images['apple-watch-series-7'],
		gallery: galleries['apple-watch-series-7'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {},
		variations: {},
	},
	{
		id: 22,
		name: 'Apple Watch SE',
		slug: 'apple-watch-se',
		brand: 'Apple',
		category: 'watch',
		description: descriptions['apple-watch-se'],
		image: images['apple-watch-se'],
		gallery: galleries['apple-watch-se'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {},
		variations: {},
	},
	{
		id: 23,
		name: 'Apple Watch Series 3',
		slug: 'apple-watch-series-3',
		brand: 'Apple',
		category: 'watch',
		description: descriptions['apple-watch-series-3'],
		image: images['apple-watch-series-3'],
		gallery: galleries['apple-watch-series-3'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {},
		variations: {},
	},
	{
		id: 24,
		name: 'Apple Watch Nike',
		slug: 'apple-watch-nike',
		brand: 'Apple',
		category: 'watch',
		description: descriptions['apple-watch-nike'],
		image: images['apple-watch-nike'],
		gallery: galleries['apple-watch-nike'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {},
		variations: {},
	},
	{
		id: 25,
		name: 'Boat Watch Wave Pro',
		slug: 'boat-watch-wave-pro',
		brand: 'Boat',
		category: 'watch',
		description: descriptions['boat-watch-wave-pro'],
		image: images['boat-watch-wave-pro'],
		gallery: galleries['boat-watch-wave-pro'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {},
		variations: {},
	},
];

export const headphones: IHeadphone[] = [
	{
		id: 26,
		name: 'AirPods 2',
		slug: 'airpods-2',
		brand: 'Apple',
		category: 'headphone',
		description: descriptions['airpods-2'],
		image: images['airpods-2'],
		gallery: galleries['airpods-2'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {},
		variations: {},
	},
	{
		id: 27,
		name: 'AirPods 3',
		slug: 'airpods-3',
		brand: 'Apple',
		category: 'headphone',
		description: descriptions['airpods-3'],
		image: images['airpods-3'],
		gallery: galleries['airpods-3'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {},
		variations: {},
	},
	{
		id: 28,
		name: 'AirPods Pro',
		slug: 'airpods-pro',
		brand: 'Apple',
		category: 'headphone',
		description: descriptions['airpods-pro'],
		image: images['airpods-pro'],
		gallery: galleries['airpods-pro'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {},
		variations: {},
	},
	{
		id: 29,
		name: 'AirPods Max',
		slug: 'airpods-max',
		brand: 'Apple',
		category: 'headphone',
		description: descriptions['airpods-max'],
		image: images['airpods-max'],
		gallery: galleries['airpods-max'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {},
		variations: {},
	},
	{
		id: 30,
		name: 'Sony WH-1000XM4',
		slug: 'wh-1000xm4',
		brand: 'Sony',
		category: 'headphone',
		description: descriptions['wh-1000xm4'],
		image: images['wh-1000xm4'],
		gallery: galleries['wh-1000xm4'],
		stock: 10,
		rating: 4.5,
		cost: {
			price: 699,
			currency: 'USD',
			discount: 0,
		},
		specs: {},
		variations: {},
	},
];

export const products: any[] = [
	{
		title: 'smartphones',
		items: phones,
	},
	{
		title: 'tablets',
		items: tablets,
	},
	{
		title: 'laptops',
		items: laptops,
	},
	{
		title: 'watches',
		items: watches,
	},
	{
		title: 'headphones',
		items: headphones,
	},
];

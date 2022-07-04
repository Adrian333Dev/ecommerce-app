import { reviews } from './../utility/data/reviews';
import { IColor } from './../utility/data/specs';

export interface IProduct {
	id: number | string;
	name: string;
	slug: string;
	type: string;
	cost: {
		price: number;
		currency: string;
		discount: number;
	};
	description: string;
	image: string;
	category: string;
	gallery: string[];
	rating: number;
	numReviews: number;
	reviews: any[];
	brand: string;
	stock: number;
	// TODO: variants in future
}

export interface IPortable extends IProduct {
	specs: {
		screenSize: number;
		screenResolution: number[];
		ram: number;
		storage: number;
		camera: number;
		battery: number;
		cpu: string;
		gpu: string;
		color: string;
	};
	variants: {
		colors: IColor[];
		storage: number[];
		ram: number[];
	};
}

export interface IPhone extends IPortable {
	// TODO: add more properties
}

export interface ITablet extends IPortable {
	// TODO: add tablet specific properties
}

export interface ILaptop extends IPortable {
	// TODO: add laptop specific properties
}

export interface IWatch extends IProduct {
	// TODO: add watch specific properties
	specs: any;
	variants: any;
}

export interface IHeadphone extends IProduct {
	// TODO: add headphone specific properties
	specs: any;
	variants: any;
}

export interface ProductProp {
	product: IPhone | ITablet | ILaptop | IWatch | IHeadphone;
}

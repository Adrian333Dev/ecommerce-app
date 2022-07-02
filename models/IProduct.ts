export interface IProduct {
	id: number | string;
	name: string;
	slug: string;
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
	brand: string;
	stock: number;
	// TODO: variants in future
	variations: any;
}

export interface IPhone extends IProduct {
	// TODO: add more properties
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
}

export interface ITablet extends IPhone {
	// TODO: add tablet specific properties
}

export interface ILaptop extends IProduct {
	// TODO: add laptop specific properties
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
}

export interface IWatch extends IProduct {
	// TODO: add watch specific properties
	specs: any;
}

export interface IHeadphone extends IProduct {
	// TODO: add headphone specific properties
	specs: any;
}

export interface IProduct {
	id: number;
	name: string;
	routerName: string;
	description: string;
	imageName: string;
	category: string;
	price: number;
	weight: number;
	stockCount: number;
	isCommision: boolean;
	totalSales: number;
}
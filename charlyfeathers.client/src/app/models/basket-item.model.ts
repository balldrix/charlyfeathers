import { IProduct } from "./product.model";

export interface IBasketItem {
	product: IProduct,
	quantity: number
}
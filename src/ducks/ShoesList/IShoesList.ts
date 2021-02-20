/* eslint-disable camelcase */
export default interface IShoes{
    shoes_id: number,
    brand: string,
    description: string,
    discount: string
    image: string,
    last_visited: string,
    listing_price: number,
    product_id: string,
    product_name: string,
    rating: number
    reviews: number
    sale_price: number
    url: string
};

export interface IShoesObject {
    shoes: IShoes[],
    count: number
};

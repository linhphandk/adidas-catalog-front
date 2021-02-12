/* eslint-disable camelcase */
export default interface IShoes{
    shoes_id: number,
    brand: string,
    description: string,
    discount: string
    images: string,
    last_visited: string,
    listing_price: number,
    product_id: string,
    product_name: string,
    rating: number
    reviews: number
    sale_price: number
    url: string
};

export interface IShoesThumbnail{
    shoes_id: number,
    image: string,
    url: string
    product_name: string,

}

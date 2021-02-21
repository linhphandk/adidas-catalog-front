/* eslint-disable camelcase */
export default interface IShoesDetail{
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

export interface IShoesList {
    shoes: IShoesDetail[],
    count: number
};

export interface IShoes {
    shoesDetail: IShoesDetail,
    images: IShoesImage[]
};

export interface IShoesImage {
    shoes_image_id: number,
    image: string,
    fk_shoes: number,
    is_default: boolean
}

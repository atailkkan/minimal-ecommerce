"use client"

import { calculateDiscountPrice, priceFormatter } from "@/app/utils/Calculate";
import { IProduct } from "@/app/utils/IProduct";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { addToCart } from "@/app/utils/Cart";

function Product({ product }: { product: IProduct }) {

    const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = product;

    const router = useRouter();

    function calculateRating(rating: number) {
        return (rating / 5) * 100;
    }

    return (
        <>
            <div className="w-full m-auto flex flex-wrap items-center py-8">
                <div className="max-w-[1400px] w-full m-auto text-[90%] breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="mx-2">
                        <i className="ri-arrow-right-s-line"></i>
                    </span>
                    <Link href="#">Product</Link>
                    <span className="mx-2">
                        <i className="ri-arrow-right-s-line"></i>
                    </span>
                    <Link href="#" className="font-semibold">{title}</Link>
                </div>
            </div>
            <div className="w-full mb-20">
                <div className="max-w-[1400px] w-full m-auto grid grid-cols-2 gap-12 product-detail">
                    <div className="col-span-1 detail-gallery">
                        <div className="w-full border border-black">
                            <img src={thumbnail} alt="" className="w-full" />
                        </div>
                    </div>
                    <div className="col-span-1 detail-content">
                        <div className="mb-6">
                            <small className="inline-block">{brand}</small>
                            <h1 className="w-full block font-semibold text-3xl">{title}</h1>
                            <small>In Stock: {stock}</small>
                        </div>
                        <div className="relative w-auto inline-flex items-center mb-6">
                            <div className="w-full h-[20px] text-[120%] flex items-center text-gray-300 default-stars">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <div className="absolute h-[20px] top-0 left-0 w-0 text-[120%] flex items-center text-orange-400 overflow-hidden active-stars" style={{ width: `${calculateRating(product.rating)}%` }}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <small className="text-[70%] ml-2">({rating})</small>
                        </div>
                        <h4 className="w-full block mb-6">{description}</h4>
                        <div className="w-full flex flex-wrap text-2xl items-center mb-6">
                            <span className="relative opacity-50 mr-6 after:absolute after:w-full after:h-[1px] after:left-0 after:top-[50%] after:bg-black"><span className="mr-1">$</span>{priceFormatter(price)}</span>
                            <strong><span className="mr-1">$</span>{calculateDiscountPrice(price, discountPercentage)}</strong>
                        </div>
                        <div>
                            <button className="inline-flex items-center justify-between duration-200 bg-blue-300 hover:bg-blue-400 border border-black px-8 py-4 font-semibold" onClick={() => { addToCart(product), router.refresh() }}>
                                <span>ADD TO CART</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
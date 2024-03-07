"use client"

import { useRef } from "react";
import { IProduct } from "../utils/IProduct";
import Link from "next/link";
import { priceFormatter, calculateDiscountPrice } from "../utils/Calculate";
import { addToCart } from "../utils/Cart";
import { useRouter } from "next/navigation";
import { Toast } from "primereact/toast";

function Card({ product }: { product: IProduct }) {

    const toast = useRef<Toast>(null);

    const router = useRouter();

    function calculateRating(rating: number) {
        return (rating / 5) * 100;
    }

    return (
        <>
            <Toast ref={toast} />
            <div className="relative col-span-1 border border-black p-4 text-center product-card bg-white">
                <div className="w-full h-full flex flex-col items-center">
                    <div className="relative block w-full pb-[100%] product-image overflow-hidden">
                        <Link href={`/product/${product.id}`} className="absolute w-full h-full left-0 top-0 duration-200 hover:opacity-70">
                            <img src={product.thumbnail} className="absolute left-0 top-0 w-full h-full object-cover" alt="" loading="lazy" />
                        </Link>
                    </div>
                    <h2 className="w-full mt-3 product-title">
                        <Link href={`/product/${product.id}`} className="block hover:underline hover:decoration-dotted">{product.title}</Link>
                    </h2>
                    <div className="relative mt-3 product-rating">
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
                        <small className="text-[70%]">({product.rating})</small>
                    </div>
                    <div className="w-full flex flex-wrap items-center justify-center mt-3 flex-grow product-price">
                        <span className="relative mx-2 opacity-50 after:absolute after:w-full after:h-[1px] after:left-0 after:top-[50%] after:bg-black"><span className="mr-1">$</span>{ priceFormatter(product.price) }</span>
                        <strong className="mx-2"><span className="mr-1">$</span>{ calculateDiscountPrice(product.price, product.discountPercentage) }</strong>
                    </div>
                    <div className="w-full mt-6 grid gap-2 product-buttons">
                        <button className="w-full flex items-center justify-between duration-200 bg-indigo-300 hover:bg-indigo-400 border border-black px-4 py-2 font-semibold" onClick={() => { addToCart(product), router.refresh() }}>
                            <span className="font-normal text-[1.2rem]">
                                <i className="ri-shopping-bag-2-line"></i>
                            </span>
                            <span>Add to Cart</span>
                        </button>
                        <Link href={`/product/${product.id}`} className="w-full flex items-center justify-between duration-200 bg-fuchsia-300 hover:bg-fuchsia-400 border border-black px-4 py-2 font-semibold">
                            <span className="font-normal text-[1.2rem]">
                                <i className="ri-login-circle-line"></i>
                            </span>
                            <span>Go to Detail</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
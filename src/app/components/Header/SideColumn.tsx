"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { IProduct } from "../../utils/IProduct";
import { getCookie, deleteCookie } from "cookies-next";
import { calculateDiscountPrice, priceFormatter } from "@/app/utils/Calculate";
import { useRouter } from "next/navigation";

function SideColumn() {

    const router = useRouter();

    const [cartProducts, setCartProducts] = useState([]);
    const cart = getCookie("MyCart");

    useEffect(() => {
        if(cart) { setCartProducts(JSON.parse(cart ?? "") ?? []) }
    }, [cart]);

    function totalPrice() {
        let total = 0;
        cartProducts.forEach((item: IProduct) => {
            total += (item.price - item.price * item.discountPercentage / 100) * item.quantity;
        });
        return priceFormatter(total);
    }

    function clearBasket() {
        setCartProducts([]);
        deleteCookie("MyCart");
        deleteCookie("Count");
        router.refresh();
    }

    function hideSide() {
        const side: any = document.querySelector(".side-basket");
        const overlay: any = side.querySelector(".side-overlay");
        const inner: any = side.querySelector(".side-inner");

        inner.style.transform = "translate(100%)";
        setTimeout(() => {
            overlay.style.opacity = 0;
        }, 200);
        setTimeout(() => {
            side.style.display = "none";
        }, 400);
    }

    return (
        <div className="fixed top-0 right-0 w-full h-full z-30 side-basket">
            <div className="fixed w-full h-full left-0 top-0 bg-black opacity-60 z-40 cursor-pointer side-overlay" onClick={() => hideSide()}></div>
            <div className="absolute right-0 top-0 max-w-[500px] w-full h-full bg-white z-50 side-inner">
                <div className="w-full h-full flex flex-col p-6 overflow-auto">
                    <div className="absolute right-6 top-6 w-[40px] h-[40px] bg-slate-100 flex items-center justify-center border-2 border-black border-dotted cursor-pointer close-side" onClick={() => hideSide()}>
                        <i className="ri-close-large-line"></i>
                    </div>
                    <div className="w-full py-[52px] flex flex-grow side-product-group">
                        <div className="w-full">
                            {
                                cartProducts.length === 0 && <div className="text-center">
                                    <span className="text-2xl flex items-center justify-center m-auto mb-2 w-[64px] h-[64px] rounded-full bg-cyan-200 border border-black">
                                        <i className="ri-shopping-bag-4-line"></i>
                                    </span>
                                    <strong className="w-full block">Has no product in your basket.</strong>
                                </div>
                            }
                            <table className="w-full">
                                <tbody>
                                    {
                                        cartProducts.length > 0 && cartProducts.map((product: IProduct, i: number) => (
                                            <tr key={i} className="border-b border-slate-300 border-dotted">
                                                <td className="py-3">
                                                    <div className="relative w-[54px] h-[54px] border border-black mr-4 product-image">
                                                        <img src={product.thumbnail} alt="" className="w-full h-full object-cover" loading="lazy" />
                                                    </div>
                                                </td>
                                                <td className="py-3">
                                                    <h2 className="mr-4 flex-grow">
                                                        <Link href={`/product/${product.id}`} className="hover:underline hover:decoration-dotted">{product.title}</Link>
                                                    </h2>
                                                </td>
                                                <td className="py-3">
                                                    <div className="mr-4 text-right product-qty">{product.quantity}x</div>
                                                </td>
                                                <td className="py-3">
                                                    <div className="font-semibold text-right product-price">
                                                        <span className="mr-1">$</span>
                                                        <span>{calculateDiscountPrice(product.price, product.discountPercentage)}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex flex-wrap total-price">
                        <table>
                            <tbody>
                                <tr>
                                    <td><span>In Basket</span></td>
                                    <td className="px-4">:</td>
                                    <td><strong>{cartProducts.length} {cartProducts.length > 1 ? 'products' : 'product'}</strong></td>
                                </tr>
                                <tr>
                                    <td><span>Total Price</span></td>
                                    <td className="px-4">:</td>
                                    <td><strong><span className="mr-1">$</span>{totalPrice()}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            cartProducts.length > 0 && <div className="w-full mt-6 grid grid-cols-2 gap-4 buttons">
                                <Link href="" className="col-span-1 p-2 bg-red-300 duration-200 hover:bg-red-400 text-center font-semibold border-2 border-black border-dotted">CHECK OUT</Link>
                                <button onClick={() => clearBasket()} className="col-span-1 p-2 bg-amber-300 duration-200 hover:bg-amber-400 text-center font-semibold border-2 border-black border-dotted">CLEAR BASKET</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideColumn;
"use client"

import Link from "next/link";
import Menu from "../Menu";
import SideColumn from "./SideColumn";
import { useRouter } from "next/navigation";

function Header({ count }: { count: number }) {

    const router = useRouter();

    const showSide = () => {
        const side: any = document.querySelector(".side-basket");
        const overlay: any = side.querySelector(".side-overlay");
        const inner: any = side.querySelector(".side-inner");

        side.style.display = "block";
        setTimeout(() => {
            overlay.style.opacity = 0.6;
        }, 200);
        setTimeout(() => {
            inner.style.transform = "translate(0)";
        }, 400);
    }

    function submitHandler(e: any) {
        e.preventDefault();
        const form = document.getElementById("search");
        const input: any = form?.querySelector("input");
        router.push(`/search?product=${input.value}`);
        input.value = "";
    }

    return (
        <header className="w-full header">
            <div className="w-full border-b-2 border-black border-dotted py-5">
                <div className="max-w-[1400px] w-full m-auto flex items-center justify-between">
                    <div className="min-w-[160px] mr-6 logo">
                        <Link href="/" className="inline-flex items-end">
                            <img src="/logo.png" className="mr-2" alt="" />
                            <div className="leading-4">
                                <span className="block font-bold">E-COMMERCE</span>
                                <small>Shopping Site</small>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full mr-6 search">
                        <div className="relative">
                            <form id="search" onSubmit={submitHandler}>
                                <input type="text" className="w-full outline-none px-4 py-[10px] bg-lime-300 border border-black placeholder:text-black" placeholder="Search a product" />
                                <button type="submit" className="absolute right-0 w-[50px] text-xl h-full">
                                    <i className="ri-search-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="min-w-[105px] flex justify-end basket" onClick={() => showSide()}>
                        <button className="relative inline-flex items-center">
                            <div className="text-right text-[85%] leading-4">
                                <strong className="block">Shopping</strong>
                                <span>Cart</span>
                            </div>
                            <i className="text-4xl ml-1 ri-shopping-bag-2-fill"></i>
                            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center bg-lime-300 text-black text-[72%] border border-black">{count}</span>
                        </button>
                    </div>
                </div>
            </div>
            <Menu />
            <SideColumn />
        </header>
    )
}

export default Header
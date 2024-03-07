"use client"

import { useState } from "react";
import Link from "next/link";
import { IProduct } from "@/app/utils/IProduct";
import ReactPaginate from "react-paginate";
import Card from "../../components/Card";
import { useParams } from "next/navigation";

export default function Category({ products }: { products: Array<IProduct> }) {

    const params = useParams();

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    function handlePageClick(event: any) {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="w-full m-auto flex flex-wrap items-center py-8">
                <div className="max-w-[1400px] w-full m-auto text-[90%] breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="mx-2">
                        <i className="ri-arrow-right-s-line"></i>
                    </span>
                    <Link href="#">Category</Link>
                    <span className="mx-2">
                        <i className="ri-arrow-right-s-line"></i>
                    </span>
                    <Link href="#" className="font-semibold capitalize">{params.slug}</Link>
                </div>
            </div>
            <div className="w-full mb-20">
                <div className="max-w-[1400px] w-full m-auto grid grid-cols-4 gap-6 product-group">
                    {
                        currentItems.map((product: IProduct, i: number) => (
                            <Card key={i} product={product} />
                        ))
                    }
                </div>
                {
                    itemsPerPage < products.length && <>
                        <div className="max-w-[1400px] w-full m-auto mt-6 product-pagination">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel="<"
                            />
                        </div>   
                    </>
                }
            </div>
        </>
    )
}

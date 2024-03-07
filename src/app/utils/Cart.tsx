import { getCookie, setCookie } from "cookies-next";
import { IProduct } from "./IProduct";

export async function addToCart(product: IProduct) {

    const arr: Array<IProduct> = [];
    product.quantity = 1;

    setCookie("Count", 0);

    if(!getCookie("MyCart")) {

        setCookie("MyCart", [product], { maxAge: 60 * 24 * 1 });
        setCookie("Count", JSON.parse(getCookie("MyCart") ?? "").length);

    } else {

        JSON.parse(getCookie("MyCart") ?? "").map((item: IProduct, i: number) => arr.push(item));
        const findItem = arr.find((item: IProduct) => item.id === product.id);
        findItem ? findItem.quantity++ : arr.push(product);

        setCookie("MyCart", arr, { maxAge: 60 * 24 * 1 });
        setCookie("Count", JSON.parse(getCookie("MyCart") ?? "").length);

    }

}
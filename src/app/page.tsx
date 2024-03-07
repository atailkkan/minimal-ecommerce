import Home from "./Home";

async function Page() {

    // Get all products
    const request = await fetch(`https://dummyjson.com/products`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const result = await request.json();
    const products = result.products;

    return (
        <Home products={products} />
    )
}

export default Page
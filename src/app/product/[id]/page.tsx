import Product from "./Product";

async function Page({ params }: { params: { id: string } }) {

    // Get single product
    const id = params.id;

    const request = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    const product = await request.json();

    return (
        <Product product={product} />
    )
}

export default Page;
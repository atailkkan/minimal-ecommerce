import Category from "./Category";

async function Page({ params }: { params: { slug: string } }) {

    const category = params.slug;

    const request = await fetch(`https://dummyjson.com/products/category/${category}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const result = await request.json();
    const products = result.products;

    return (
        <Category products={products} />
    )
}

export default Page;
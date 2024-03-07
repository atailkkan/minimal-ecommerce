import Search from './Search';

async function Page({ searchParams }: { searchParams: any }) {

    // Filter all products
    const request = await fetch(`https://dummyjson.com/products`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const result = await request.json();
    const products = result.products;
    const filteredProducts = products.filter((product: any) => {
        return product.title.toLowerCase().includes(searchParams.product.toLowerCase());
    });

    return (
        <Search products={filteredProducts} />
    )
}

export default Page;
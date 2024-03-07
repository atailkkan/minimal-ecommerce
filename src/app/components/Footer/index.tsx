import Footer from "./Footer";

async function Index() {

    // Get all categories
    const request = await fetch(`https://dummyjson.com/products/categories`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const categories = await request.json();

    return (
        <Footer categories={categories} />
    )
}

export default Index;
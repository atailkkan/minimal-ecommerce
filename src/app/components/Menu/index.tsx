import Menu from './Menu';

async function Index() {

    // Get all categories
    const arr: Array<string> = [];
    const request = await fetch(`https://dummyjson.com/products/categories`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const categories = await request.json();
    categories.forEach((category: string) => {
        if(arr.indexOf(category.split('-')[0]) === -1) {
            (category.split('-')).length === 1 && arr.push(category.split('-')[0]);
        }
    });

    return (
        <Menu categories={arr} />
    )
}

export default Index;
import Link from "next/link";

function Menu({ categories }: { categories: any }) {
    return (
        <div className="w-full border-b-2 border-black border-dotted py-3">
            <div className="w-full m-auto">
                <nav className="header-nav">
                    <ul className="w-full flex flex-wrap items-center justify-center">
                        {
                            categories.map((category: any, i: number) => (
                                <li key={i} className="mx-4 capitalize">
                                    <Link href={`/category/${category}`} className="hover:underline hover:decoration-dotted">{category}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu;
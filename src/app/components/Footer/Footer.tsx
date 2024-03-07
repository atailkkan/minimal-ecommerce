"use client"

import Link from "next/link";

function Footer({ categories }: { categories: any }) {
    return (
        <footer className="w-full footer py-16 border-t-2 border-black border-dotted">
            <div className="max-w-[1400px] w-full m-auto flex justify-between">
                <div className="max-w-[400px] w-full column-left">
                    <div className="min-w-[160px] mb-4 logo">
                        <Link href="/" className="inline-flex items-end">
                            <img src="/logo.png" className="mr-2" alt="" />
                            <div className="leading-4">
                                <span className="block font-bold">E-COMMERCE</span>
                                <small>Shopping Site</small>
                            </div>
                        </Link>
                    </div>
                    <div className="footer-excerpt mb-10">
                        Suspendisse ultrices metus ac ultrices condimentum. Phasellus iaculis ante eget justo aliquet, non molestie erat malesuada.
                    </div>
                    <div className="flex flex-wrap text-[125%] mt-4 social-media">
                        <Link href="#" className="bg-white w-[36px] h-[36px] flex items-center justify-center border border-black mr-2 facebook">
                            <i className="ri-facebook-line"></i>
                        </Link>
                        <Link href="#" className="bg-white w-[36px] h-[36px] flex items-center justify-center border border-black mr-2 instagram">
                            <i className="ri-instagram-line"></i>
                        </Link>
                        <Link href="#" className="bg-white w-[36px] h-[36px] flex items-center justify-center border border-black mr-2 pinterest">
                            <i className="ri-pinterest-line"></i>
                        </Link>
                        <Link href="#" className="bg-white w-[36px] h-[36px] flex items-center justify-center border border-black mr-2 linkedin">
                            <i className="ri-linkedin-line"></i>
                        </Link>
                    </div>
                </div>
                <div className="max-w-[900px] w-full flex justify-end column-right">
                    <nav className="max-w-[200px] ml-[10%] w-full flex justify-end footer-nav">
                        <div>
                            <h3 className="font-semibold mb-3">Categories</h3>
                            <ul>
                                {
                                    categories.slice(0,5).map((category: any, i: number) => (
                                        <li key={i}><Link href="" className="capitalize">{category}</Link></li>
                                    ))
                                }
                                <li className="mt-2">
                                    <Link href="#" className="font-semibold">and more...</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="max-w-[200px] ml-[10%] w-full flex justify-end footer-nav">
                        <div>
                            <h3 className="font-semibold mb-3">Pages</h3>
                            <ul>
                                <li><Link href="">About us</Link></li>
                                <li><Link href="">Our Missions</Link></li>
                                <li><Link href="">Privacy Policy</Link></li>
                                <li><Link href="">Testimontials</Link></li>
                                <li><Link href="">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="max-w-[200px] ml-[10%] w-full flex justify-end footer-nav">
                        <div>
                            <h3 className="font-semibold mb-3">Contact</h3>
                            <ul>
                                <li><Link href="">St. Jonathan Street, 99880 London, England</Link></li>
                                <li><Link href="">+90 (123) 456 78 90</Link></li>
                                <li><Link href="">info@example.com</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
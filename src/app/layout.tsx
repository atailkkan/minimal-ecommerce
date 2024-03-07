import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";

import "remixicon/fonts/remixicon.css";
import "./globals.css";

const inter = Inter({ weight: ['300', '400', '500', '600', '700'], subsets: ["latin-ext"] });
const robotoMono = Roboto_Mono({ weight: ['300', '400', '500', '600', '700'], subsets: ["latin-ext"] });

export const metadata: Metadata = {
    title: "E-Commerce | Shopping Site",
    description: "Lorem ipsum dolor sit amet",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={robotoMono.className}>
                <div className="w-full min-h-screen flex flex-col justify-between global">
                    <Header />
                    <main className="w-full flex-grow main">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

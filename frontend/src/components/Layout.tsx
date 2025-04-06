import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <NavBar />

            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-x-hidden">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;

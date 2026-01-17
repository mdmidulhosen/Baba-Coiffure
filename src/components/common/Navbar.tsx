"use client";

import React, { useState } from "react";
import { Menu, X, User, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const navLinks = [
        { name: "Home", href: "/", icon: null },
        { name: "About", href: "/about", icon: <User className="w-4 h-4" /> },
        { name: "Services", href: "/services", icon: <Settings className="w-4 h-4" /> },
    ];

    return (
        <nav className="w-full px-4 md:px-6 py-4 bg-[#EEEEEE]/80 backdrop-blur-md flex justify-center sticky top-0 z-50 border-b border-white/20">
            <div className="w-full max-w-[1620px] flex justify-between items-center">

                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden bg-gray-300 border-2 border-white shadow-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200&auto=format&fit=crop"
                            alt="Logo"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50px, 60px"
                            priority
                        />
                    </div>
                </Link>

                <div className="hidden md:flex items-center bg-[#1E1E1E] rounded-full p-2 gap-2 shadow-lg">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={`
                flex items-center justify-center rounded-full transition-all duration-300
                ${index === 0
                                    ? "px-8 py-3 bg-white text-[#222222] font-bold text-lg hover:bg-gray-200"
                                    : "w-[50px] h-[50px] bg-white text-[#222222] hover:bg-gray-200 hover:scale-105"
                                }
              `}
                        >
                            {index === 0 ? link.name : link.icon}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex bg-white rounded-2xl p-3 w-[50px] h-[50px] items-center justify-center shadow-md hover:shadow-lg transition cursor-pointer">
                    <div className="flex flex-col gap-1 items-center">
                        <span className="block w-1 h-1 border border-black bg-black rounded-full"></span>
                        <span className="block w-3 h-3 border border-black bg-black rounded-sm"></span>
                    </div>
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
                </button>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col p-6 gap-4"
                        >
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 active:scale-95 transition"
                                >
                                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                                        {link.icon || <span className="font-bold">H</span>}
                                    </div>
                                    <span className="text-lg font-bold text-gray-800">{link.name}</span>
                                </Link>
                            ))}

                            <div className="mt-2 pt-4 border-t border-gray-100">
                                <button className="w-full py-4 bg-[#1E1E1E] text-white rounded-xl font-bold text-lg">
                                    Contact Us
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </nav>
    );
};

export default Navbar;
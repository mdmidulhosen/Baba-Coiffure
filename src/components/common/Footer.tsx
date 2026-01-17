'use client';

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full relative mt-12">
            <div
                style={{
                    position: 'relative', background: '#FAFAFA',
                    overflow: 'hidden'
                }}
                className="w-full pt-12 pb-8 px-4 md:px-[165px]"
            >
                <div style={{ width: 640, height: 640, left: 0, top: -328, position: 'absolute', pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{
                        width: 640,
                        height: 640,
                        left: 0,
                        top: 0,
                        position: 'absolute',
                        background: '#245640',
                        borderRadius: 9999,
                        filter: 'blur(160px)',
                        opacity: 0.6
                    }} />
                    <div style={{
                        width: 240,
                        height: 240,
                        left: 340,
                        top: 0,
                        position: 'absolute',
                        background: '#403691',
                        borderRadius: 9999,
                        filter: 'blur(120px)',
                        opacity: 0.6
                    }} />
                </div>
                <div className="relative z-10 w-full">
                    <div className="flex flex-col md:flex-row items-center justify-between border-b border-black/10 pb-8 mb-8 gap-6">
                        <div className="shrink-0">
                            <Image
                                src="/assets/images/Logo.png"
                                alt="Spark Logo"
                                width={150}
                                height={50}
                                className="object-contain w-auto h-auto"
                            />
                        </div>

                        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
                            {['Privacy policy', 'Terms & Conditions', 'Contact us'].map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    className="text-black/75 text-sm md:text-base font-normal hover:text-black hover:underline transition-all"
                                >
                                    {link}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-end">
                        <a
                            href="mailto:info@sparktech.com"
                            className="group flex items-center justify-end gap-3 hover:opacity-80 transition-opacity"
                        >
                            <div className="bg-black p-2 rounded-md group-hover:bg-[#245640] transition-colors">
                                <Mail className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-black font-medium text-lg">
                                info@sparktech.com
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
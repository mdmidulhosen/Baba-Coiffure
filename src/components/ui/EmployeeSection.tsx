import React from 'react';
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

interface Employee {
    id: number;
    name: string;
    role: string;
    image: string;
}

const employees: Employee[] = [
    { id: 1, name: "Sarah Jenkins", role: "Product Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop" },
    { id: 2, name: "Michael Chen", role: "Senior Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop" },
    { id: 3, name: "Jessica Lee", role: "Project Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop" },
    { id: 4, name: "David Ross", role: "Marketing Head", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop" },
];

const EmployeeSection = () => {
    return (
        <section className="w-full max-w-[1620px] mx-auto px-4 md:px-6 py-12 flex flex-col gap-12">

            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                <div className="flex flex-col gap-2 max-w-lg">
                    <span className="text-black text-lg font-normal font-sans">Hey, Team!</span>
                    <h1 className="text-black text-3xl md:text-5xl font-black uppercase leading-tight font-sans">
                        Ready to Build <br /> The Next Big Thing?
                    </h1>
                </div>

                <div className="flex-1 w-full bg-[#EEEEEE] rounded-[32px] p-6 flex flex-col md:flex-row gap-6 items-center">

                    <Image
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop"
                        alt="Alex Morgan - Current User"
                        className="rounded-2xl object-cover bg-[#222222]"
                        width={96}
                        height={96}
                        priority
                    />
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h2 className="text-[#222222] text-3xl font-black font-sans">Alex Morgan</h2>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[#535353]">
                            <MapPin className="w-5 h-5" />
                            <span className="text-lg">New York, USA</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-black text-2xl font-black">Top Talent</h3>
                    <button className="text-[#535353] text-lg font-bold uppercase hover:text-black transition">
                        See all
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 items-stretch lg:items-center">

                    <button
                        aria-label="Add new employee"
                        className="w-[60px] h-[60px] min-w-[60px] self-center lg:self-auto bg-[#222222] rounded-full flex items-center justify-center hover:bg-black transition shadow-md"
                    >
                        <ArrowUpRight className="text-white w-6 h-6" />
                    </button>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        {employees.map((emp) => (
                            <div
                                key={emp.id}
                                className="bg-[#EEEEEE] rounded-[20px] p-6 flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer"
                            >

                                <Image
                                    src={emp.image}
                                    alt={emp.name}
                                    className="rounded-full object-cover border-4 border-white shadow-sm"
                                    width={96}
                                    height={96}
                                />
                                <div className="text-center">
                                    <h4 className="text-black text-lg font-bold">{emp.name}</h4>
                                    <p className="text-[#535353] text-sm">{emp.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="hidden xl:flex h-auto px-6 py-4 bg-white shadow-sm rounded-[30px] items-center text-[#535353] text-lg font-bold whitespace-nowrap hover:shadow-md transition">
                        Show more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EmployeeSection;
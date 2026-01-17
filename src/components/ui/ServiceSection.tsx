import { ArrowUpRight, Briefcase } from "lucide-react";
interface Service {
    id: number;
    name: string;
    count: number;
    image: string;
}

const ServiceSection = () => {
    const services: Service[] = [
        { id: 1, name: "Web Development", count: 120, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop" },
        { id: 2, name: "UI/UX Design", count: 85, image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop" },
        { id: 3, name: "Mobile Apps", count: 40, image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop" },
    ];

    return (
        <section className="w-full max-w-[1620px] mx-auto px-4 md:px-6 py-12 flex flex-col gap-8">
            <div className="flex justify-between items-center">
                <h3 className="text-black text-2xl font-black capitalize">Services</h3>
                <button className="text-[#535353] text-lg font-bold uppercase hover:text-black transition">See all</button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">

                <div className="hidden lg:flex w-[60px] h-[60px] min-w-[60px] bg-[#222222] rounded-full items-center justify-center">
                    <Briefcase className="text-white w-6 h-6" />
                </div>


                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative h-[240px] rounded-[20px] overflow-hidden flex flex-col justify-end p-0 hover:scale-[1.02] transition-transform duration-300"
                            style={{
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            <div className="relative w-full p-4 bg-white/20 backdrop-blur-md border-t border-white/20 flex justify-between items-center">
                                <div className="flex flex-col">
                                    <span className="text-white font-medium">{service.name}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-white text-lg font-bold">{service.count} Projects</span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="bg-[#EEEEEE] p-1.5 rounded-lg">
                                        <span className="text-xs font-bold px-1">A+</span>
                                    </div>
                                    <div className="bg-black p-1.5 rounded-lg">
                                        <ArrowUpRight className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
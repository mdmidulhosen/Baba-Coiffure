import { Briefcase, Calendar } from "lucide-react";
import Image from "next/image";

const ProjectSection = () => {
    return (
        <section className="w-full max-w-[1620px] mx-auto px-4 md:px-6 py-12">
            <div className="w-full bg-[#EEEEEE] rounded-[32px] p-6 flex flex-col gap-6">

                <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-4 rounded-3xl shadow-sm">
                    <div className="w-full md:w-[120px] h-[120px] bg-gray-300 rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop"
                            alt="Project"
                            className="w-full h-full object-cover"
                            height={0}
                            width={0}
                        />
                    </div>

                    <div className="flex-1 flex flex-col gap-3 w-full">
                        <div className="flex justify-between items-center w-full">
                            <h4 className="text-black text-xl font-bold">Fintech Dashboard Redesign</h4>
                            <div className="bg-[#F63989] px-3 py-1 rounded-full flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                <span className="text-white text-xs font-medium">In Progress</span>
                            </div>
                        </div>


                        <div className="flex flex-wrap gap-4 text-[#535353]">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">Deadline: 12th Dec, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4" />
                                <span className="text-sm">Client: Global Tech</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 gap-4">
                    <div className="text-center md:text-left">
                        <div className="text-[#535353] text-sm">Service Category</div>
                        <div className="text-black text-lg font-bold">SaaS Development</div>
                    </div>
                    <div className="text-center md:text-right">
                        <div className="text-[#535353] text-sm">Location</div>
                        <div className="text-black text-lg font-bold">San Francisco, CA</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProjectSection;
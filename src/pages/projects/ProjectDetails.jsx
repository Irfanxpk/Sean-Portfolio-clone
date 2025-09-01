import { useParams } from "react-router-dom";
import { projects } from "../../utils/constants/projects";
import SideNav from "../../components/layout/SideNav";
import ProjectBanner from "../../components/sections/Project/ProjectBanner";
import { footerContent } from "../../utils/constants/footerData";


export default function ProjectDetail() {
    const { id } = useParams();
    console.log(id ,"hey");
    const project = projects.find((p) => p.id == id);

    console.log(id,projects);
    if (!project) return <h2 className="text-center text-red-500">Project not found</h2>;

    return (
        <>
            <SideNav />
            <div className="w-[calc(100%-56px)] absolute top-0 right-0">
                <ProjectBanner image={project.image} />
                
       
            



            <div className="bg-[#1C2B66] text-white min-h-screen flex flex-col">
                {/* Hero Section */}
                <div className="w-full">
                    <img
                        src="/hero-image.jpg"
                        alt="Paper-Pals Hero"
                        className="w-full object-cover"
                    />
                </div>


                {/* Content Section */}
                <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
                    {/* Intro */}
                    <div>
                        <h2 className="text-3xl font-semibold">Packaging with Intention</h2>
                        <p className="text-gray-300 text-lg mt-2">Paper-Pals</p>
                        <div className="mt-4 text-sm text-gray-300 space-y-1">
                            <p><span className="font-semibold">Category:</span> Packaging Design</p>
                            <p><span className="font-semibold">Skills:</span> Illustration, Design, CAD</p>
                            <p><span className="font-semibold">Project:</span> Self-Led Project</p>
                        </div>
                    </div>


                    {/* Description + Image */}
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <p className="text-sm leading-relaxed text-gray-200">
                            With a fun, approachable, and clever strategy, Paper-Pals was created as a nuts & bolts packaging redesign. The goal was to make packaging smart, simple, and playful, while also being sustainable and practical. I wanted to create something that could be reused beyond packaging — extending the product’s lifecycle forward as both toy and storage.
                        </p>
                        <img src="/toy-1.jpg" alt="Toy set" className="rounded-lg shadow" />
                    </div>


                    {/* Big Image */}
                    <div>
                        <img src="/toy-2.jpg" alt="Main packaging" className="w-full rounded-lg shadow" />
                    </div>


                    {/* Side-by-side images */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <img src="/toy-3.jpg" alt="Toy packaging detail" className="rounded-lg shadow" />
                        <img src="/toy-4.jpg" alt="Toy layout" className="rounded-lg shadow" />
                    </div>


                    {/* Text + Image */}
                    <div className="space-y-6">
                        <p className="text-sm leading-relaxed text-gray-200">
                            The final design is a simple, compact, and smart packaging that extends the product itself. All pieces are arranged in a grid structure that makes storage efficient and intuitive. The board becomes a playable, educational element that children can use again and again, promoting creativity.
                        </p>
                        <img src="/toy-5.jpg" alt="Board packaging" className="w-full rounded-lg shadow" />
                    </div>


                    {/* Digital Section */}
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">The Digital Experience</h3>
                            <p className="text-sm leading-relaxed text-gray-200">
                                In addition to the physical play, I extended the experience digitally through an iPad app. This allowed children to continue learning and building in a playful way while reinforcing creativity and imagination.
                            </p>
                        </div>
                        <img src="/toy-6.jpg" alt="Digital play app" className="rounded-lg shadow" />
                    </div>


                    <p className="text-center text-gray-300 text-sm mt-12">Thank you for looking!</p>
                </div>


                {/* Footer */}
                <footer className="border-t-1 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 h-15">
                        <div className="flex space-x-4 mb-2 md:mb-0 ml-10 gap-4 text-[12px] underline">
                          {footerContent.footerLinks.map((link, idx) => (
                            <a key={idx} href={link.url} className="hover:text-white">
                              {link.name}
                            </a>
                          ))}
                        </div>
                        <p className="text-[13px] text-[#999EB9]">© 2021 Sean Lin</p>
                      </footer>
            </div>

            </div>
        </>
    );
}

import { useParams } from "react-router-dom";
import { projects } from "@/utils/constants/projects";
import SideNav from "@/components/layout/SideNav";
import ProjectBanner from "@/components/sections/Project/ProjectBanner";
import { footerContent } from "@/utils/constants/footerData";
import React, { Suspense, lazy, useEffect } from "react";

const PrototypeEmbedded = lazy(
  () => import("@/components/ui/embedded/PrototypeEmbedded"),
);

export default function ProjectDetail() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    const targets = document.querySelectorAll(".animate-on-scroll");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const { id } = useParams();
  const project = projects.find((p) => p.id == id);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-center text-red-500 text-xl font-semibold">
          Project not found
        </h2>
      </div>
    );
  }

  return (
    <>
      {/* Side Navigation */}
      <SideNav />

      {/* Page Wrapper */}
      <div className="w-[calc(100%-56px)] absolute top-0 right-0">
        <div className="bg-[#1C2B66] text-white min-h-screen flex flex-col">
          {/* Hero Banner */}
          <div className="w-full">
            <ProjectBanner image={project.image} />
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto px-6 py-16 ">
            {/* Title + Meta Info */}
            <div className="grid md:grid-cols-2 gap-30 items-start ">
              <div>
                <h1 className="text-5xl font-medium leading-tight">
                  Packaging with Intention
                </h1>
                <h2 className="text-2xl mt-2 text-gray-300">Paper-Pals</h2>
              </div>
              <div className="text-sm  space-y-2  flex gap-4">
                <p className=" text-[#FAFBFF] text-sm w-1/3 leading-tight">
                  <span className="text-md text-[#7F7F7F] ">Ambition</span>{" "}
                  <br />
                  How might we extend the product life of children's toys
                  through thoughtful package structures and digital extensions?
                </p>
                <div className="ml-6">
                  <p className=" text-[#FAFBFF] text-sm w-2/3 leading-tight">
                    <span className="text-md text-[#7F7F7F] ">Solution:</span>{" "}
                    <br />
                    Package Design, UI/UX
                  </p>
                  <p className=" text-[#FAFBFF] text-sm w-full leading-tight mt-6">
                    <span className="text-md text-[#7F7F7F] ">Role:</span>{" "}
                    <br />
                    Self-Led Project
                  </p>
                </div>
              </div>
            </div>

            {/* First Text + Image */}
            <div className="grid md:grid-cols-1 gap-8 items-end">
              <div className=" flex flex-col  items-end  self-end mx-27">
                <p className="text-sm leading-tight text-[#FAFBFF] max-w-xs ">
                  With its short product life, and often times wasteful,
                  non-recyclable packaging, children's toys pose significant
                  threats to our environment. Designing a sustainable packaging
                  requires considerations beyond material and form, but also its
                  functionality. “Why can’t packaging become part of the
                  product?” was the question I asked myself moving forward with
                  this project.
                </p>
                <img
                  src="/images/projects/toy-rectangle-copy-D0213A24-DB4E-4203-9016-670DAE7F7AA3@2x (1).png"
                  alt="Toy subject"
                  className="max-w-xs my-8"
                />
                <div className="w-1/6 h-9  flex flex-col mx-48  space-y-2 gap-2">
                  <span className="h-1 w-15 bg-[#7F7F7F] "> </span>
                  <h5 className="text-sm leading-tight text-[#7F7F7F] max-w-xs font-medium">
                    The Perfect Subjet
                  </h5>
                </div>
                <p className="text-sm leading-tight text-[#FAFBFF] max-w-xs mt-6">
                  The Nuts and Bolt toys have been around for decades to help
                  children ages 2-4 develop their motor skills, coordination,
                  memory, dexterity, concentration, and pattern recognition.
                  <br />
                  <br />
                  With a narrow target age range, it was important to think of
                  ways to increase the life span of the product by introducing
                  other functional elements like building and creativity into
                  the product’s usage without altering the product itself
                </p>
              </div>
              <div className="max-w-5/6  mx-18">
                <img
                  src="/images/projects/nuts&bolt.jpg"
                  alt=""
                  className="slide-in animate-on-scroll"
                />
                <div className=" grid md:grid-cols-2 max-w-5xl gap-8  mt-8">
                  <img
                    src="/images/projects/toy1.jpg"
                    alt="toy image"
                    className="slide-in animate-on-scroll"
                  />
                  <img
                    src="/images/projects/toy-2.jpg"
                    alt="toy image"
                    className="slide-in animate-on-scroll"
                  />
                </div>
              </div>
              <div className=" flex flex-col  items-end  self-end mx-27 mt-5">
                <div className="w-1/6 h-9  flex flex-col mx-48  space-y-2 gap-2">
                  <span className="h-1 w-15 bg-[#7F7F7F] "> </span>
                  <h5 className="text-sm leading-tight text-[#7F7F7F] max-w-xs font-medium">
                    The Packaging
                  </h5>
                </div>
                <p className="text-sm leading-tight text-[#FAFBFF] max-w-xs mt-6">
                  The Final Design is a simple, compact, and smart packaging
                  that elevates the product.
                  <br />
                  <br />
                  At first glance, the packaging showcases the nuts and bolts in
                  a neat and organized fashion, the tone down colors of the
                  cardboard also highlights the colorful and fun characteristics
                  of the product itself.
                </p>
              </div>
              <div className="max-w-5/6  mx-18 mt-5">
                <img
                  src="/images/projects/toy-3.jpg"
                  alt="toy image"
                  className="slide-in animate-on-scroll"
                />
                <div className=" flex flex-col  items-end  self-end  ">
                  <p className="text-sm leading-tight text-[#FAFBFF] max-w-xs mt-6">
                    From giraffes to airplanes, the redesigned packaging
                    includes a stack of cardboard pieces that can be torn apart
                    to use as building blocks for children to build anything
                    they want using the nut and bolts.
                    <br />
                    <br />
                    The material characteristics of the cardboard has allowed
                    for a package structure that not only is more sustainable,
                    but also introduces new elements of functionality that
                    empowers user creativity and construction.
                  </p>
                </div>
              </div>
              <div className="max-w-5/6  mx-18 mt-5">
                <img
                  src="/images/projects/toy-4.jpg"
                  alt="toy image"
                  className="slide-in animate-on-scroll"
                />
                <div className=" flex  justify-between  mt-5">
                  <div>
                    <h2 className=" leading-tight text-[#FAFBFF] max-w-xs font-[400]">
                      The Digital Experience
                    </h2>
                  </div>

                  <p className="text-sm leading-tight text-[#FAFBFF] max-w-xs mt-6">
                    In addition to the physical play experience, I introduced a
                    digital accompaniment to further extend the functionality of
                    the product by introducing additional moments for creativity
                    and learning.
                    <br />
                    <br />
                    Above is a mid-fi prototype for the app, titled
                    “Paper-Pals”. Drawing visual references from children’s
                    worksheet, Paper-Pals, is an AT inspired experience that
                    enables the user to scan and digitize their creation, and
                    interact with them through story telling and other
                    educational activities.
                  </p>
                </div>
                <div className="mt-10">
                  <Suspense fallback={<div>Loading...</div>}>
                    <PrototypeEmbedded />
                  </Suspense>
                </div>
              </div>
            </div>

            {/* Closing Text */}
            <p className="text-center text-gray-400 text-sm mt-12">
              Thank you for looking!
            </p>
          </div>

          {/* Footer */}
          <footer className="border-t py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <div className="flex space-x-4 mb-2 md:mb-0 gap-4 text-[12px] underline">
              {footerContent.footerLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="hover:text-white transition"
                >
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

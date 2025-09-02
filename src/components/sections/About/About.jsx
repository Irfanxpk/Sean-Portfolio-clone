import { useEffect } from "react";

export default function AboutModal({ isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 justify-end z-49 flex ">
      <div className="md:w-[calc(100%-56px)] bg-[#F5F6FA] h-5/12 p-8  relative about-modal">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-[#1C2B66] hover:rotate-90 transition-transform cursor-pointer"
        >
          ✕
        </button>

        {/* Content */}
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-[28px] font-medium mb-4 ">
              Let me <br /> catch you up
            </h2>
            <div className="mt-20 grid grid-cols-2 gap-4 text-blue-700 underline leading-1 text-[14px] ">
              <a href="mailto:test@example.com">Email</a>
              <a href="#">Résumé</a>
              <a href="#">LinkedIn</a>
              <a href="#">Behance</a>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 text-[#1C2B66] w-3/6 ">
            <div>
              <p className="leading-tight w-70 text-sm">
                Currently at{" "}
                <span className="font-bold text-blue-700">Doblin</span>, I’ve
                been immersed in design research – uncovering innate user needs
                to deliver transformative business solutions, brought to life
                with intuitive and delightful digital experiences.
              </p>
              <p className="leading-tight w-70 mt-4 text-sm">
                Previously at{" "}
                <span className="font-bold text-blue-700">Growsquares</span>, I
                helped pushed the possiblities for urban gardening. Blending
                together physical and digital interactions to enhance and
                differientiate their product experience.
              </p>
            </div>

            <div>
              <p className="leading-tight w-70 text-sm">
                Right before that at{" "}
                <span className="font-bold text-blue-700">Apple</span>
                and <span className="font-bold text-blue-700">Figmints</span>, I
                worked with interdisciplinary teams to design impactful brand
                and marketing solutions.
              </p>
              <p className="leading-tight w-70 mt-4 text-sm">
                I graduated from the{" "}
                <span className="font-bold text-blue-700">
                  Rhode Island School of Design
                </span>{" "}
                with a BFA in Industrial & Product Design with a concentration
                in Creative Computation, Technology & Culture.
              </p>
            </div>
          </div>
        </div>
        {/* Links */}
      </div>
    </div>
  );
}

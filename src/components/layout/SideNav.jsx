import { useState } from "react";
import AboutModal from "../sections/About/About";

const SideNav = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Design", href: "#design" },
    { name: "Music", href: "#music" },
    { name: "Videos", href: "#videos" },
  ];

  return (
    <nav className="h-full">
      <div className="fixed top-0 pt-11 left-0 w-[56px] h-full bg-white border-r border-black flex flex-col justify-between items-center text-center z-50 font-roboto">
        <div className="h-full flex flex-col gap-10">
          {/* Top rotated title */}
          <div className="rotate-270 w-[158px] h-14 text-sm bg-black flex items-center justify-center text-white">
            <div className="text-[16px] hover-smooth">
              <a href="/">seanlindesign</a>
            </div>
          </div>

          {/* Middle nav links */}
          <div className=" font-medium text-[17px] tracking-wider">
            <ul className="list-none p-0 flex flex-col items-center ">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-black w-14 p-2">
                  <li className="my-6 writing-vertical-rl rotate-270 hover-smooth">
                    {item.name === "About" ? (
                      <button
                        onClick={() => setIsAboutOpen(true)}
                        className="text-gray-800 text-sm no-underline hover:text-gray-600 transition-all duration-300 ease-in-out focus:outline-none border-none"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-800 text-sm no-underline hover:text-gray-600 transition-all duration-300 ease-in-out text-shadow-none"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom image */}
        <div className="border-t border-black p-2 w-full flex justify-center cursor-pointer">
          <img
            src="/images/personal/home-copy-952a4930-copy3x-F5B26E2E-84BD-4AAD-A4B8-DBE862C187DF@2x.png"
            alt="logo"
            className="w-8 h-auto hover:rotate-25 transition-all duration-300 ease-in-out"
            onClick={() => setIsAboutOpen(true)}
          />
        </div>
      </div>
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </nav>
  );
};

export default SideNav;

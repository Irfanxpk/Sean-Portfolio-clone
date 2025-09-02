import { footerContent } from "@/utils/constants/footerData";

export default function Footer() {
  return (
    <div className="bg-[#000927] text-white min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 pl-20">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-8 py-12">
          <div>
            <h2 className="text-3xl font-normal">
              {footerContent.professionalProjects.title}
            </h2>
            <p className="text-[#999EB9] mt-2 text-[20px] max-w-md">
              {footerContent.professionalProjects.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[20px] max-w-xl ">
            {footerContent.professionalProjects.items.map((item, idx) => (
              <p key={idx} className="text-[#FAFBFF] text-[20px] leading-6 ">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="border-l-4 border-gray-700 ml-20">
          <div className="ml-20 py-12">
            <h3 className="text-[#999EB9] mb-4 text-[20px]">
              {footerContent.selectedClients.title}
            </h3>
            <ul className="space-y-2 text-[20px] text-[#FAFBFF] mt-20">
              {footerContent.selectedClients.clients.map((client, idx) => (
                <li key={idx}>{client}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-1 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
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
  );
}

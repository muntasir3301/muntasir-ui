import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Pricing", "FAQ"],
  },
  {
    title: "Company",
    links: ["Privacy", "Terms of Service"],
  }
];

export default function Footer_4() {
  return (
    <footer className="divide-y dark:bg-gray-100 dark:text-gray-800">
      <div className="container sm:grid lg:grid-cols-11  gap-6 py-10">

        <div className="col-span-4">
            <Image
              src="https://i.ibb.co/TMzt602m/mylogo.png"
              width={200}
              height={100}
              alt="logo"
              unoptimized
            />
          <p className="md:pr-12 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quod voluptatum tempore. Voluptas, alias rem.</p>
        </div>

        {/* <div className="col-span-8"> */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-3 col-span-2 mt-6 md:mt-0">
              <h3 className="text-[1.1rem] font-medium uppercase dark:text-gray-900 border-l-[3px] pl-2 border-secondary" style={{lineHeight: 'px'}}>{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-3 col-span-3 mt-6 md:mt-0">
            <h3 className="text-[1.1rem] font-medium uppercase dark:text-gray-900 border-l-[3px] pl-2 border-secondary">Connect With Us</h3>


          <form method="POST" action="#" className="rounded-xl sm:border sm:border-gray-100 sm:bg-white p-1.5 sm:shadow">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative text-gray-500">
                
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" className=""></path>
                  </svg>
                </div>
                <input type="email" name="email" id="email" placeholder="Your Email address" className="w-full cursor-text rounded-xl border-2 py-2 pr-4 pl-9 text-sm outline-none transition-all duration-200 ease-in-out sm:border-0 focus:border-transparent focus:ring" required />
              </div>

              <button type="submit" className="group flex items-center justify-center rounded-xl bg-blue-700 px-3 py-2 text-white transition">
                <span className="group flex w-full items-center justify-center rounded text-center font-medium text-sm">Subscribe</span>
                <svg className="shrink-0 group-hover:ml-4 ml-2 h-4 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </form>

            <div className="flex space-x-3 text-xl text-secondary pt-4">
               <a href="#"><FaFacebook/></a>
               <a href="#"><BsTwitterX/></a>
               <a href="#"><FaGithub/></a>
               <a href="#"><FaInstagram/></a>
            </div>
          </div>
        {/* </div> */}

      </div>


      {/* Bottom Part  */}
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © {new Date().getFullYear()} <a href="https://muntasir.vercel.app/">Developed by Muntasir Ui.</a>
      </div>
      
    </footer>
  );
}

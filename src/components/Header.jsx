'use client'
import Image from "next/image";
import { useState } from "react";
import GroupImg from '../assets/Group.png';
import LinkedInImg from '../assets/bxl-linkedin.svg.png';
import LanguagImg from '../assets/Frame 493.png';
import Link from "next/link";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    //   return (
    //     <nav className="bg-[#F9FBFF] h-[80px] p-4">
    //       <div className="max-w-7xl mx-auto flex justify-between items-center">
    //         <a href="/" className="text-blue-950 font-bold text-xl">
    //           Project Management
    //         </a>
    //         <button
    //           onClick={() => setIsOpen(!isOpen)}
    //           className="md:hidden text-white"
    //         >
    //           <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //         </button>

    //         {/* Desktop Menu */}
    //         <div className="hidden md:flex space-x-6 text-white">
    //           <a href="/" >
    //             Home
    //           </a>
    //           <a href="/project" >
    //             Projects
    //           </a>
    //         </div>
    //       </div>

    //       {/* Mobile Menu */}
    //       {isOpen && (
    //         <div className="md:hidden mt-2 flex flex-col space-y-2 text-white">
    //           <a href="/" onClick={() => setIsOpen(false)}>
    //             Home
    //           </a>
    //           <a href="/project" onClick={() => setIsOpen(false)}>
    //             Projects
    //           </a>
    //         </div>
    //       )}
    //     </nav>
    //   );

    return (
        <>
        <nav className="bg-[#F9FBFF] h-[80px] py-5 flex justify-between px-6 md:px-35 shadow-[0_0_94px_rgba(0,0,0,0.2)]">
            <Image src={GroupImg} height={41} alt="Supreme_Group_Img" width={146} />
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-blue-400"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <div className="hidden md:flex gap-10 ">
                <button className="bg-[#5CD6FF] rounded-4xl text-black border-[#00BFFF] border-[1px] w-[145px] ">Contact us</button>
                <Link href={'https://www.linkedin.com/company/supreme-group-company/'} target="_blank" className="py-2"><Image src={LinkedInImg} alt="LinkedIn_Img" height={24} width={24} /></Link>
                <div className="py-2.5"><Image src={LanguagImg} height={22} width={52} alt="Language_Image" /></div>
            </div>
        </nav>
        {isOpen && (
            <div className="md:hidden flex gap-8 sm:gap-30 space-y-2 bg-[#F9FBFF] p-4">
              <button className="bg-[#5CD6FF] rounded-4xl text-black border-[#00BFFF] border-[1px] w-[145px] ">Contact us</button>
                <Link href={'https://www.linkedin.com/company/supreme-group-company/'} target="_blank" className="py-2"><Image src={LinkedInImg} alt="LinkedIn_Img" height={24} width={24} /></Link>
                <div className="py-2.5"><Image src={LanguagImg} height={22} width={52} alt="Language_Image" /></div>
            </div>
        )}
        </>
    )
};

export default Header;

import Image from 'next/image'
import React from 'react'
import GroupImg from '../assets/Group.png'
import FooterLinks from './FooterLinks'
import Link from 'next/link'

function Footer() {
  const footerLinks = [
    {
      title: "APPLICATIONS",
      link: ["Apparel", "Automotive", "Fitration", "Customised Solution"]
    },
    {
      title: "COMPANY",
      link: ["Innovation", "Global Competency", "About Us", "Contact Us"]
    },
    {
      title: "MORE",
      link: ["Careers", "Privcy Policy", "Terms and Conditions"]
    },
    {
      title: "FOLLOW US",
      link: ["Twitter", "LinkedIn", "Instagram", "Medium"]
    }
  ]
  return (
    <footer className='bg-[url("../assets/footer.jpg")] bg-cover bg-right-bottom lg:py-29 py-10'>
      <div className='lg:w-[982px] w-auto mx-auto px-2'>
        <Link href={'/'}><Image src={GroupImg} className='h-10 md:h-12 w-auto cursor-pointer' /></Link>
        <div className='text-[#000000B2] gap-5 lg:gap-42 my-5 lg:my-20 grid-cols-2 md:grid-cols-4 grid'><FooterLinks footerLinks={footerLinks} /></div>
        <div className='flex lg:flex-row flex-col text-[#000000B2] justify-between'>
          <div className='text-[14px] text-center'>@2023 All Rights Reserved.</div>
          <div className='text-[14px] text-center'>Supreme house: 110, 16th Road,Chembur, Mumbai – 400071.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
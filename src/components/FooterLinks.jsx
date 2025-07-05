'use client'
import React from 'react';
import Link from 'next/link';

function FooterLinks({footerLinks}) {
    const handleRedirect = (category, linkItem) => {
        if(category.title === "APPLICATIONS") {
            return `/${category.title.toLowerCase()}/${linkItem.toLowerCase().split(' ').join('-')}`;
        } else if (linkItem === "LinkedIn") {
            return 'https://www.linkedin.com/company/supreme-group-company/';
        }else {
            return `/${linkItem.toLowerCase().split(' ').join('-')}`;
        }
    }
  return (
        footerLinks.map((item, index) => {
            return(
                <div key={index} className='p-2 flex flex-col gap-2 lg:gap-5 w-auto'>
                <div className='text-[16px] text-[#000000] font-bold w-max'>{item.title}</div>


                {item.link.map((linkItem, i) => {
                    return (
                        <Link key={i} href={handleRedirect(item, linkItem)} target={linkItem === "LinkedIn" ? '_blank' : undefined} className='text-[14px] font-medium w-max cursor-pointer'>{linkItem}</Link>
                    )
                })}

                </div>
            )
        })
  )
}

export default FooterLinks
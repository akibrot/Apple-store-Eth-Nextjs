import Link from 'next/link'
import React from 'react'

function FooterLinkGenerator({data}) {
  return (
    <div className="flex flex-col ">

    <h1 className="text-white text-xl font-bold font-Montserrat mt-5 md:mt-0">{data.category}</h1>
    <div className="flex flex-col pl-2 text-sm gap-1 md:mt-2 mt-5">
        {
            data.Links.map((links)=>{
                return <Link key={links.title} href={links.to} >{links.title}</Link>
            })
        }
       
    </div>
</div>
  )
}

export default FooterLinkGenerator
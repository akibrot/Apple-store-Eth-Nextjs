import React from 'react'
import PartnersCard from './PartnersCard'

function Parteners() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-5xl pt-10 text-[#810102] font-bold'>Partners</h1>
            <div className="flex gap-6 py-16 flex-wrap justify-center items-center">
                <PartnersCard />
                <PartnersCard />
                <PartnersCard />
                <PartnersCard />
                <PartnersCard />

            </div>
        </div>
    )
}

export default Parteners
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'
import { GiCircleClaws } from 'react-icons/gi'
import FooterLinkGenerator from './Footer/FooterLinkGenerator'
import FooterLinksDemoData from './Footer/LinksData'

function Footer() {

    return (
        <div className="bg-[#590000] flex flex-row flex-wrap gap-2 w-screen text-xl  justify-between pt-16 text-white">
            <div className="flex flex-col flex-[2.1] md:pl-20 pl-16" >
                <div className="text-white text-4xl flex ">
                    <p className="font-bold ">E</p>
                    <GiCircleClaws />
                    <p >FF</p>
                </div>
                <p className="pt-3 pb-4 text-[#D7D7D7] text-sm">

                    Etiam at augue sit amet erat fringilla aliquet sed quis felis. Nunc sodales sapien vitae felis fringilla, quis auctor lectus vestibulum.
                </p>
                <div className="flex gap-5 w-fit h-8 flex-row  md:mb-10 mb-5 items-center justify-center ">
                    <div className="circle rounded-[50%] shadow-sm w-9 h-9 bg-red-800 flex items-center justify-center cursor-pointer"  >
                        <FaFacebook />
                    </div>
                    <div className="circle rounded-[50%] shadow-sm w-9 h-9 bg-red-800 flex items-center justify-center cursor-pointer" >
                        <FaTwitter />
                    </div>
                    <div className="circle rounded-[50%] shadow-sm w-9 h-9 bg-red-800 flex items-center justify-center cursor-pointer" >
                        <FaLinkedin />
                    </div>
                    <div className="circle rounded-[50%] shadow-sm w-9 h-9 bg-red-800 flex items-center justify-center cursor-pointer" >
                        <FaYoutube />
                    </div>
                </div>
            </div>
            <div className='flex flex-row  flex-wrap md:flex-nowrap  justify-between flex-[8] mt-0 mx-16'>
                {
                    FooterLinksDemoData.map((data) => {
                        return <FooterLinkGenerator key={data.id} data={data} />
                    })
                }
            </div>
            <div className="mt-10 md:mt-0 w-screen bg-[#450000] flex items-center justify-between px-2 md:px-16 text-[0.8rem] h-12 border-[1px] border-l-0 border-r-0  border-[rgba(255,255,255,.5)]">
                <p>
                    © ECFF 2022.
                </p>
                <p>
                    Powered by M.A.D Technologies |- Akibrot samuel 0989489349
                </p>
            </div>
        </div>
    )
}

export default Footer
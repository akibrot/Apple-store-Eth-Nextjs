import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa"
import { GiShoppingCart } from "react-icons/gi"
import { useSelector } from "react-redux"
import img from '../public/images/4.webp'
import Demodata from "./DemoData"
import ListItems from "./ListItems"
import Product from "./Product"

function Products() {
  const state = useSelector((state)=>state.cart)

    const [incart, setincart] = useState('Add to cart')
    const cart_handler = () => {
        if (incart === "Add to cart") {
            setincart("Remove")
        }
        else {
            setincart("Add to cart")
        }
    }
    const name = "testetstetetetetetetet"

    const category = [
        "Mac", "iPhone", "Apple Watch", "iPad"]
        var filterd = Demodata.filter((data) => data.category == "Mac")
    const [selected, setSeleced] = useState("Mac")
    const [dataMenu, setDataMenu] = useState(filterd)

    const setselecedhabdler = (name) => {
        setSeleced(name)

        var filterd = Demodata.filter((data) => data.category == name)

        setDataMenu(filterd)
        console.log(filterd)
    }
useEffect(()=>{

},[dataMenu,setDataMenu])
    return (
        <div className=" w-screen  sticky  bg-[#1b1b1b] flex flex-col items-center z-20">

            <h1 className="text-white py-16 text-3xl sm:text-5xl font-bold">
                New Promos
            </h1>
            <div className="menu flex border-b-[2px] border-gray-400/70 opacity-60 px-5 sm:px-0">
                {
                    category.map((name) => {
                        return <ListItems key={name} name={name} selected={selected} setselecedhabdler={setselecedhabdler} />

                    })
                }
            </div>

            <div className="py-10 mb-12 flex flex-row flex-wrap gap-5 items-center justify-center relative">

                {
                    dataMenu.map((data) => {
                        return <Product key={data.id} data={data}></Product>
                    })
                }
                <div className={state.length==0?"hidden ":"fixed right-0 sm:right-16 bottom-0 sm:mb-10 mb-3 mr-3 sm:mr-0"}>
                    <div className="bg-gradient-to-r from-pink-300 to-pink-500  sm:p-5 p-4 rounded-full flex items-center justify-center relative cursor-pointer">
                        <Link href={"/cart"}><GiShoppingCart  className="text-[40px] sm:text-[60px]" color="white"/></Link>
                    <div className="absolute sm:top-4 top-[6px]  sm:right-5 right-3">
                        <p className="sm:text-2xl text-xl font-extrabold">{state.length}</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products
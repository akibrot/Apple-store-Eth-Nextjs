import axios from 'axios'
import NewsCard from './NewsCard'
import { useEffect, useState } from 'react'
export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products?limit=6')
    const posts = await res.json()
    return {
        props: {
            posts,
        },
    }
}


function NewsAndBlogs(props) {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=6").then((res) => {
            // console.log(res.data)
            setdata(res.data)
        }).catch((err) => {
            console.log(err)
        })
        console.log(props.posts)
    }, [])


    return (
        <div className='flex flex-col items-center justify-center '>
            <h1 className='uppercase font-[roboto ] font-bold text-xl '>stay informed</h1>
            <h1 className='text-[#810102] font-bold font-sans leading-[100%] tracking-wide text-4xl mb-11'>News & Blogs</h1>
            <div className="card w-[90%] flex items-center justify-center flex-wrap gap-4">
                {
                    data.map((news) => <NewsCard key={news.id} data={news}/>)
                }


            </div>
        </div>
    )
}

export default NewsAndBlogs
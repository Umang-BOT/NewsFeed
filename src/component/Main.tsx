import  { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Home from './Home'
import News from './News'

const Main = () => {
    const [news,setNews]=useState([])
    const [search,setSearch]=useState("")
    const [menu,setMenu]=useState("")

    const getNews=async()=>{
        try{
            await fetch(`https://gnews.io/api/v4/search?q=${menu ? menu : "politics"}&lang=en&country=us&max=10&apikey=c6dc13eb6a5e1a6c804928edbb2e8140`)
        .then(res=>res.json())
        .then(json=>setNews(json.articles))   
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getNews()
    },[menu])
  return (
    <div>
        <Navbar setSearch={setSearch}/>
        <Menu setMenu={setMenu}/>
        <div className='bg-gray-100 text-bold'>
            <h1 className='ml-20 text-3xl p-3'>Your News</h1>
            <Home news={news}/>
        </div>
        <News news={news} search={search}/>
    </div>
  )
}

export default Main
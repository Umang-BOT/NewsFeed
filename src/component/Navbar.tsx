import search from '../assets/search.png'
import {signInWithPopup } from 'firebase/auth'
import {auth,googleProvider} from '../firebase/Setup'
import bg from '../assets/earth.jpg'

type searchProp={
  setSearch:any
}

const Navbar = (props:searchProp) => {
  const googlesign=async()=>{
    try{
      await signInWithPopup(auth,googleProvider)
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className='flex items-center'>
        <div className='flex items-center'>
            <img src={bg} className='w-20 h-20'/>
            <h1 className='text-gray-700 text-2xl font-medium ml-3'>NewsFeed</h1>
        </div>
        <div className='flex items-center bg-zinc-100 rounded-lg ml-10 p-3 w-6/12'>
            <img src={search} className='w-5 h-5'/>
            <input onChange={(e)=>props.setSearch(e.target.value)} placeholder='Search For News' className='ml-4 bg-zinc-100 w-6/12'/>
        </div>
        <button onClick={googlesign} className='ml-10 bg-blue-600 text-white p-2 rounded-lg'>Sign in</button>
    </div>
  )
}

export default Navbar
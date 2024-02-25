import news from '../assets/news.png'
type newsProp={
    news:any
}

const Home = (props:newsProp) => {
  return (
    <div className='flex items-start bg-gray-300 p-10 w-screen'>
        <div className='grid grid-cols-2 p-5 bg-white rounded-md'>
          <a href={props?.news[1]?.url}>
              <div className='w-72'>
                <h1 className="text-orange-600 text-xl p-1">Top Stories</h1>
                <img src={news} className='w-72 h-44 rounded-md'/>
                <h1 className='font-medium text-sm'>{props?.news[1]?.source?.name.toUpperCase()}</h1>
                <h1 className='text-lg w-60'>{props?.news[1]?.title}</h1>
              </div>
              <hr className='border-blue-500' />
              <div className='w-72 mt-3'>
                <h1 className="text-orange-600 text-xl p-1"/>
                <img src={news} className='w-72 h-44 rounded-md'/>
                <h1 className='font-medium text-sm'>{props?.news[10]?.source?.name.toUpperCase()}</h1>
                <h1 className='text-lg w-60'>{props?.news[10]?.title}</h1>
              </div>
          </a>
          <div className='w-60 ml-7'>
          <h1 className='text-orange-800 text-2xl'>News</h1>
              <h1 className='font-medium text-sm'>{props?.news[0]?.source?.name.toUpperCase()}</h1>
              <hr className='border-red-500' />
              <h1 className='text-sm hover:underline'>{props?.news[0]?.title}</h1>
              <h1 className='font-medium text-sm mt-3'>{props?.news[2]?.source?.name.toUpperCase()}</h1>
              <hr className='border-red-500' />
              <h1 className='text-sm hover:underline'>{props?.news[2]?.title}</h1>
              <h1 className='font-medium text-sm mt-3'>{props?.news[3]?.source?.name.toUpperCase()}</h1>
              <hr className='border-red-500' />
              <h1 className='text-sm hover:underline'>{props?.news[3]?.title}</h1> 
          </div>
      </div>
    <div className='bg-white w-5/12 ml-5 p-2 rounded-lg'>
      <h1 className='text-orange-800 text-2xl ml-5'>Local News</h1>
      <div className='flex items-center ml-5'>
        <div>
          <h1 className='font-medium text-sm'>{props?.news[4]?.source?.name}</h1>
          <h1 className='text-sm hover:underline'>{props?.news[4]?.title}</h1>
        </div>
        <img src={news} className='w-10 h-18'/>
      </div>
      <hr className='border-green-500' />
      <div className='flex items-center ml-5 mt-3'>
        <div>
            <h1 className='font-medium text-sm'>{props?.news[5]?.source?.name}</h1>
            <h1 className='text-sm hover:underline'>{props?.news[5]?.title}</h1>
          </div>
          <img src={news} className='w-10 h-18'/>
      </div>
      <hr className='border-green-500' />
      <div className='flex items-center ml-5 mt-3'>
        <div>
            <h1 className='font-medium text-sm'>{props?.news[6]?.source?.name}</h1>
            <h1 className='text-sm hover:underline'>{props?.news[6]?.title}</h1>
          </div>
          <img src={news} className='w-10 h-18'/>
      </div>
      <hr className='border-green-500' />
      <div className='flex items-center ml-5 mt-3'>
        <div>
            <h1 className='font-medium text-sm'>{props?.news[7]?.source?.name}</h1>
            <h1 className='text-sm hover:underline'>{props?.news[7]?.title}</h1>
          </div>
          <img src={news} className='w-10 h-18'/>
      </div>
      <hr className='border-green-500' />
      <div className='flex items-center ml-5 mt-3'>
        <div>
            <h1 className='font-medium text-sm'>{props?.news[8]?.source?.name}</h1>
            <h1 className='text-sm hover:underline'>{props?.news[8]?.title}</h1>
          </div>
          <img src={news} className='w-10 h-18'/>
      </div>
    </div>
    </div>
  )
}

export default Home
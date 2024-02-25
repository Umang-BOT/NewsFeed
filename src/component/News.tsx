

type newsProp={
    news:any
    search:any

}

const News = (props:newsProp) => {
  return (
    <div>
      <h1 className='text-orange-800 text-2xl ml-10'>More News</h1>
        <div className='bg-white w-screen ml-30 rounded-lg grid grid-cols-3 p-5'>
            {props?.news?.filter((data:any)=>data?.title?.includes(props?.search)).map((data:any)=>{
                return <a href={data.url}>
                    <div className='flex items-center ml-5 border border-spacing-2 p-2'>
                    <div>
                    <h1 className='font-medium text-sm'>{data.source?.name}</h1>
                    <h1 className='text-sm hover:underline'>{data?.title}</h1>
                    </div>
                    <img src={data?.urlToImage} className='w-10 h-18'/>
                    </div>
                </a>
            })}
      </div>
    </div>
  )
}

export default News


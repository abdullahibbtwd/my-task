

const Loading = () => {
  return (
   
     <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <div className="flex justify-center items-center relative">
       
        <div className="animate-spin rounded-full h-24 w-24 border-4 border-t-green-300 border-gray-200"></div>
      </div>
      <div className="text-center text-2xl font-semibold">Loading.....</div>
    </div>
 
  )
}

export default Loading

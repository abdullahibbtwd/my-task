import PropTypes from 'prop-types'

const Pagination = ({currentPage,totalItems,itemPerPage,onPageChange}) => {
     const totalPages = Math.ceil(totalItems/itemPerPage)
 
    return (
    <div className='p-4 flex gap-2 items-center justify-between text-gray-500'>
    <button disabled={currentPage === 1}
    onClick={()=> onPageChange(currentPage-1)}
     className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-45 disabled:cursor-not-allowed">
        prev
    </button>
    <div className="flex items-center gap-2 text-sm">
       {Array.from({length:totalPages},(_,i)=>i+1).map((page)=>(
        <button key={page}
        onClick={()=>onPageChange(page)}
        className={`relative inline-flex items-center p-1 py-0 border-none text-sm font-medium ${currentPage===page ? `bg-blue-600 text-white`: `text-gray-700  hover:bg-gray-50` }`}
        >
            {page}
        </button>
       ))}
    </div>
    <button
     disabled={currentPage===totalPages}
     onClick={()=>onPageChange(currentPage+1)}
      className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-45 disabled:cursor-not-allowed">
        next 
    </button>
</div>
  )
}

 Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    itemPerPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired,

  }

export default Pagination

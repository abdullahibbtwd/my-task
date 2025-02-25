import PropTypes from 'prop-types'

const Searchbar = ({searchName,setSearchName}) => {
  return (
    <div className="w-2/3">
       <div className="w-full md:w-full justify-center flex  items-center  text-x rounded-full ring-[1.5px] ring-gray-500 px-1">
               <input type="text" placeholder="Search..." className="w-full p-2 bg-transparent outline-none"
               onChange={(e)=>setSearchName(e.target.value)}
               value={searchName}
               />
               <img src="/search.png" className="h-5 w-5 mr-4" alt="" />
           </div>
    </div>
  )
}
 Searchbar.propTypes = {
    searchName: PropTypes.string.isRequired,
    setSearchName: PropTypes.func.isRequired
   

  }
export default Searchbar

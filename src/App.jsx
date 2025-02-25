import { useEffect, useState } from "react"
import axios from "axios"
import Searchbar from "./component/Searchbar/Searchbar"
import Pagination from "./component/Pagination/Pagination"
import Table from "./component/Table/Table"
import Loading from "./component/Loading/Loading"


const App = () => {

  const [data,setData] = useState([])
  const [searchName,setSearchName] = useState('')
  const [currentPage,setCurrentPage] = useState(1)
  const [loading,setLoading ] = useState(true)
  const [itemPerPage] = useState(8)


  // Columns Header and accessors
const columns = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Name",
    accessor: "name",
    
  },
  {
    header: "Company",
    accessor: "company",
    className: "hidden md:hidden lg:table-cell",
  },

  {
    header: "Phone",
    accessor: "phone",
    className: " md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden md:hidden lg:table-cell",
  },
  {
    header: "Email",
    accessor: "email",
    className: " md:table-cell lg:table-cell",
  },
  {
    header: "Username",
    accessor: "username",
    className: "hidden md:table-cell lg:table-cell",
  },
  {
    header: "Website",
    accessor: "website",
    className: "hidden md:hidden lg:table-cell",
  },

];


// Fetch an Api Data


  useEffect(()=>{
    const loadData = async ()=> {
     try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data)
        //{name:response.data[0].name,}
    
     }catch(error){
    (error.message)
     }finally{
      setLoading(false)
     }
    }
    loadData();
  },[])


  //search a user by name 
    const filteredUsers = data.filter(username => username.name.toLowerCase().includes(searchName.toLocaleLowerCase()))

  console.log(data)

//Pagination

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem,indexOfLastItem)
  useEffect(()=>{
      setCurrentPage(1)
  },[data])


  // Table Render
  const renderRow = (item) => ( 

    <tr 
    key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-[12px] odd:bg-abyellowlight hover:bg-abpurplelight">
      <td className="flex  items-center gap-4 p-4">
     {item.id}
      </td>
      <td className="text-[10px] md:text-[12px] md:table-cell">{item.name}</td>
      <td className="hidden md:hidden lg:table-cell">{item.company.name}</td>
      <td className="text-[10px] md:text-[12px] md:table-cell">{item.phone}</td>
      <td className="hidden md:hidden lg:table-cell">{item.address.city},<br/>{item.address.street}</td>
      <td className="text-[10px] md:text-[12px] md:table-cell">{item.email}</td>
      <td className="hidden md:table-cell">{item.username}</td>
      <td className="hidden md:hidden lg:table-cell">{item.website}</td>
    </tr>
 
  );

  if(loading) {
    return(
      <Loading/>
    )
  }

  return (
    
    
    <div className=" p-5 px-1  flex flex-col gap-5 items-center justify-center overflow-x-hidden">
      <h1 className="text-1xl font-medium text-gray-700">JSONPlaceholder Data Viewer</h1>
     <Searchbar searchName={searchName} setSearchName={setSearchName}/>
      <Table columns={columns} renderRow={renderRow} data={currentItems}/>
      <Pagination
      currentPage={currentPage}
      totalItems={data.length}
      itemPerPage={itemPerPage}
      onPageChange={setCurrentPage}
      />

      
    </div>
  
  )
}

export default App

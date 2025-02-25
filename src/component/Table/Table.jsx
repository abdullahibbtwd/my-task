import PropTypes from 'prop-types'




const Table = ( {columns,renderRow,data}) => {
 

    return (
        <div className="p-2 md:px-3 flex items-center justify-center">
        <table className="w-[95%] min-w-[95%] table-fixed px-3  mt-4">
        <thead className='min-w-[90%]'>
          <tr 
          
          className="text-left text-gray-500 text-xs">
            {columns.map((col) => (
              <th key={col.accessor} className={col.className}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item)=>renderRow(item))}
        </tbody>
      </table>

    

        </div>
 
    );
  };
  Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        accessor:PropTypes.string.isRequired,
        header:PropTypes.string.isRequired,
        className:PropTypes.string
    })).isRequired,
    renderRow:PropTypes.func.isRequired

  }

  export default Table;
  

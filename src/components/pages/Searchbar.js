import React,{useState} from 'react'
import "./Searchbar.css"
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io';
import Bookdata from './Data.json'
function Searchbar() {
  const[filterdata,setFilterdata]=useState([])
  const[wordclear,setWordclear]=useState("")
  const handleFilter=(e)=>{
    const searchword=e.target.value;
    setWordclear(searchword);
    const newfilter=Bookdata.filter((value)=>{
      return value.title.toLowerCase().includes(searchword.toLowerCase())
    });
    if(searchword===""){
       setFilterdata([])
    }else{
    setFilterdata(newfilter);
    }
  };
  const clearData=()=>{
    setFilterdata([])
    setWordclear("")
  }
  return (
    <div className='Search'>
        <div className='SearchInput'>
            <input type="text" placeholder='search book' value={wordclear} onChange={handleFilter}/>
            <div className='searchIcon'>
              {filterdata.length === 0 ? <FaIcons.FaSearch />:< IoIcons.IoMdClose id="clearBtn"  onClick={clearData}/>}
              </div>
            </div>
            {filterdata.length !=0 && (
            <div className='bookdata'>
                {filterdata.slice(0,10).map((value,key)=>{
                 return (
                    <a className='datalink' href={value.link} target="_blanck"><p id="p1">{value.title}</p></a>
                 );
                  })}
            </div>  )}
    </div>
  )
}

export default Searchbar
import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import dp from '../assets/dp.png'
export default function Homepage() {

    function Item({item}){
        console.log("HomePage",item)
        return (
        <div>
            <div className='flex flex-col justify-center items-center mt-2'>
            
            <img src={item.img}  className="w-40 h-40 rounded-md lg:w-48 lg:h-48 mt-2"  alt="item" />
            <h1 className='text-center text-lg font-semibold my-1'>{item.name}</h1>
            {
                item.permission === true ? 
                <p>Permission Req</p>:
                <p>No Permission req</p>    
            }
            <Link to = {
                {
                    pathname:"/itemDesc",
                    item : {item}
                }
            } className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-400 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 ">
             View More
            </Link>
          </div>
          </div>
        )
      }

      const items = [ {
        id:1,
        name:"Basketball",
        img:"basketball.png",
        permission:false,
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et"
      
        
      },
      {
        id:2,
        name:"Camera",
        img:"camera.png",
        permission:true,
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et"
      
        
      },
      {
        id:3,
        name:"Rasberry Pi",
        img:"rasberry.png",
        permission:true,
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et"
      
        
      },
      {
        id:4,
        name:"item 4",
        permission:true,
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et"
      
        
      },
      {
        id:5,
        name:"Item 5",
        permission:true,
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et"
      
        
      },
      {
        id:6,
        name:"Item 6",
        permission:true,
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et"
      
        
      },
      {
        id:7,
        name:"Item 7",
        permission:true,
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et"
      
        
      },
      {
        id:8,
        name:"Item 8",
        permission:true,
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et"
      
        
      },
      {
        id:9,
        name:"Item 9",
        permission:true,
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et"
      
        
      },
      {
        id:10,
        name:"Item 10",
        permission:true,
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et"
      
        
      },
    ]
    const [search,setSearch]  = React.useState('')
    const [filteredItems,setFilteredItems] = React.useState(items)
    const [show,setShow] = React.useState(false)

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearch(query);
    
        // Filter the data array based on the search term
        const filtered = items.filter(item => item.name.toLowerCase().startsWith(query));
        setFilteredItems(filtered);
      };
    
   
  return (
    <div>
        <div className='flex justify-between py-2 bg-slate-400'>
        <div className='flex ml-4'>
            <img src={logo} alt='img' className='w-16 h-14 mr-2' />
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-4xl font-semibold mt-2'>GYMKHANA INVENTORY SYSTEM</h1>
        </div>
        <div className='mr-4'>
            <button onClick={() => setShow(!show)}><img src={dp} className='w-14 h-14' alt='DP'/></button>
            {
                show ? 
                    <div className='absolute right-4 flex flex-col bg-slate-900 text-white p-4 rounded-xl'>
                        <Link>View Profile</Link> 
                        <Link>Log Out</Link>
                    </div>
                    :
                    null
            }
        </div>
        </div>

       <div className='flex justify-center'>
        <input placeholder='Search' onChange={handleSearch} className='px-3 py-1 mt-4 border-solid border-2 border-slate-900 rounded-2xl'/>
        <CiSearch className='mt-5 ml-1 text-3xl'/>
       </div>

        <div>
        <div className=' gap-4 grid grid-cols-2 p-2 md:grid-cols-3 lg:grid-cols-4 lg:pl-5 lg:pr-5'> 

            {filteredItems.length !==0 ? filteredItems.map((item)=>{
                return(
                <Item key={item.id} item={item} />
                )
            }) : 
            <div className='flex justify-center items-center'>
                <div >No Such Items Available </div>
            </div>
}
     </div>
        </div>

    </div>
  )
}

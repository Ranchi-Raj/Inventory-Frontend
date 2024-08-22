import {useLocation} from 'react-router-dom'; 

export default function ItemDescription(){
    const location = useLocation();
    const {item} = location
    console.log(item)
    return  (
    <>  
    <div className='flex flex-col items-center justify-center mt-3' >
        
        <img src={item.img}  className="w-60 h-60 rounded-lg sm:w-96 sm:h-96 "  alt="item" />
        <h1 className=' text-3xl font-semibold py-1'>{item.name}</h1>
        <p className='text-slate-400 w-60 sm:w-96'>{item.description}</p>
        <p className='text-xl text-slate-600 mt-1'>{item.permission===true? <p>Permission Required</p>:<p> No Permission Required</p>}</p>
        <button  className=" mt-4 p-3 w-64 font-medium text-white text-lg bg-slate-800 rounded-full active:bg-black  hover:bg-slate-500">
               Reserve Now
        </button>
      </div>
      </>
      )
  }
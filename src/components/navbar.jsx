import React from 'react'
import logo from '../assets/logo.png'
import dp from '../assets/photo.jpg'
import {Link} from 'react-router-dom'
export default function Navbar() {

    const [show,setShow] = React.useState(false)
    const divRef = React.useRef(null);

    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    React.useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  return (
    <div className='flex justify-between py-2 bg-slate-400'>
    <div className='flex ml-4'>
        <img src={logo} alt='img' className='w-16 h-16 mr-2' />
        <h1 className='text-sm sm:text-xl md:text-2xl lg:text-4xl font-semibold mt-2'>GYMKHANA INVENTORY SYSTEM</h1>
    </div>
    <div className='mr-4'>
        <button onClick={() => setShow(!show)}><img src={dp} className='w-14 h-14 rounded-full' alt='DP'/></button>
        {
            show ? 
                <div ref={divRef} className='absolute right-4 flex flex-col bg-slate-900 text-white p-4 rounded-xl'>
                    <Link to='/profile'>View Profile</Link> 
                    <Link>Log Out</Link>
                </div>
                :
                null
        }
    </div>
    </div>
  )
}

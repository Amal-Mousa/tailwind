'use client'
import {useState} from 'react';
import Image from 'next/image';
import Menu from '../constants';

const SideBar = () =>{
  const [open, setOpen] = useState(true)
  

  return(
    <div className="flex">
      <div className={`${open? 'w-72' : 'w-20'} pt-4 duration-300 h-screen bg-dark-purple relative`}>
        <p 
          className={`absolute cursor-pointer -right-3  top-9 w-7 border-2 border-dark-blue rounded-full flex justify-center items-center ${!open && 'rotate-45'} `}
          onClick={()=>setOpen(!open)}> + </p>
        <div className='flex gap-x-4 items-center'>
          <Image src="/public/assets/icon.png" alt="Logo" width={50}
            height={50} className={`cursor-pointer duration-500`}/>
          <h1 className={`text-white origin-left font-meduim text-xl duration-300 ${!open && 'scale-0' }`}>Designers</h1>
        </div>
        <ul>
          {Menu.map((item, index) => (
            <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 
              cursor-pointer p-2 hover:bg-light-white rounded-md
              mt-2`} >
              <Image src={`/public/assets/${item.icon}.png`} alt='icon' width={30} height={30}/>
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default SideBar;

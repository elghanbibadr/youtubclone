import React from 'react'
 import { linkList } from '../../../constant'
import { Link } from './Link'
export const SideBar = () => {
  return (
    <div>
      <ul className='flex items-center overflow-y-auto'>
         {linkList.map(({name,src},index)=>{
          return <Link key={index} name={name} src={src}  />
        })} 
        {/* <Link/> */}
      </ul>
    </div>
  )
}

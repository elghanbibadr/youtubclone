import React from 'react'
 import { linkList } from '../../../constant'
import { Link } from './Link'
export const SideBar = () => {
  return (
    <div>
      <ul>
         {linkList.map(({name,src},index)=>{
          return <Link key={index} name={name} src={src}  />
        })} 
        {/* <Link/> */}
      </ul>
    </div>
  )
}

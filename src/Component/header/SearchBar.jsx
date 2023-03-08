import React from 'react'
import { SearchIcon } from './SearchIcon'
export const SearchBar = () => {
  return (
    <form  className='border-2 bg-white  flex items-center justify-between py-2 px-4 rounded-full'>
   <input className='outline-none text-black  bg-transparent'  type="text" placeholder='Search ' />
    <SearchIcon />
    </form>
  )
}

import React from 'react'
import { SearchBar } from './SearchBar'
import youtubLogo from "../../../public/assets/youtbLogo.png"
const Header = () => {
  return (
    <header className='flex items-center justify-between'>
     <img className='h-10' src={youtubLogo} alt="youtub logo" />
     <SearchBar/>
    </header>
  )
}

export default Header
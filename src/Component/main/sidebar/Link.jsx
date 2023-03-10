import React from 'react'
export const Link = (props) => {
  return (
    <li className='flex items-center '>
    <img className='h-6' src={props.src} />
    <p className='text-white'>{props.name}</p>
    </li>
  )
}

import React from 'react'
export const Link = (props) => {
  return (
    <li className='flex items-center pb-2   mr-20'>
    <img className='h-6 mr-2' src={props.src} />
    <p className='text-white w-fit text-sm '>{props.name}</p>
    </li>
  )
}

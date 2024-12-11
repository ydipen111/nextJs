import Link from 'next/link'
import React from 'react'

const Header = () => {
  console.log("this is the header component");

  return (
    <div className='bg-pink-400 text-2xl space-x-5  p-4 text-white'>
      <Link href={'/about'}>My profile</Link>
      <Link href={'/services'}>Search</Link>


    </div>
  )
}

export default Header

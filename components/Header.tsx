"use client"
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
  // const router = useRouter();

  return (
    <div className='bg-sky-600 text-2xl space-x-5  p-4 text-white'>
      <Link href={'/about'}>My profile</Link>
      <Link href={'/services'}>Search</Link>
      <Link href={'/create-movie'}>Add movie</Link>


    </div>
  )
}

export default Header

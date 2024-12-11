
import React from 'react'
import Link from "next/link"

const Navigation = () => {
  return (
    <div className="p-4 bg-gray-800 text-white space-x-5 text-2xl">

      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>

      <Link href={'/services'}>Sevices</Link>

    </div>
  )
}

export default Navigation

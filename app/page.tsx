import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>Welcome home!</h1>
      <Link href='/blog'>BLog</Link>
      <Link href='/login'>Login</Link>
      <Link href='/signup'>Sign-up</Link>



    </div>
  )
}

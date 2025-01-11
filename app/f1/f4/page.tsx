import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      folder4 page
      <Link href="f1/f3">
        f3 page
      </Link>

      <Link href="/about">
        About
      </Link>


    </div>
  )
}

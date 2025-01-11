"use client"
import React, { ReactNode } from 'react'

export default function layout({
  children,
  notifications,
  users,
  revenue,
  login
}: {
  children: ReactNode,
  notifications: ReactNode,
  users: ReactNode,
  revenue: ReactNode,
  login: ReactNode
}) {
  const isLoggenIn = false;



  return isLoggenIn ? (
    <div className='grid grid-rows-4 grid-cols-2 gap-5 space-x-5 bg-blue-400 px-40 py-20'>
      <h2 className='border-2 col-span-2'>Complex Dashboard</h2>

      <h1 className='border-2 h-[200px] w-[200px]col-span-2'>{children}</h1>
      <h3 className='border-2 h-[200px] w-[200px]' >{notifications}</h3>
      <h3 className='border-2 h-[200px] w-[200px]' >{users}</h3>
      <h3 className='row-span-2 border-2 h-[200px] w-[200px]' >{revenue}</h3>
      <h3 className='border-2 h-[200px] w-[200px]' >remiging</h3>

    </div>
  ) : (
    <div>
      {login}
    </div>
  )
}

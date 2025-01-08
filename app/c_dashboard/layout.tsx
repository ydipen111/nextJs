"use client"
import React, { ReactNode } from 'react'

export default function layout({
  children,
  notifications,
  user,
  revenue
}: {
  children: ReactNode,
  notifications: ReactNode,
  user: ReactNode,
  revenue: ReactNode
}) {
  return (
    <div>
      Complex dashboard
      <h1>{children}</h1>
      <h3>{notifications}</h3>
      <h3>{user}</h3>
      <h3>{revenue}</h3>
      <h3></h3>

    </div>
  )
}

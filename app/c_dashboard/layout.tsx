import React, { ReactNode } from 'react'

export default function layout({ children, }: {
  children: ReactNode
}) {
  return (
    <div>
      Complex dashboard
      {children}

    </div>
  )
}

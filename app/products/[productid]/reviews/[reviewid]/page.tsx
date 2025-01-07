
import { notFound } from 'next/navigation'
import React from 'react'

export default function page({ params, }: {
  params: {
    productid: string,
    reviewid: string

  }
}) {
  x
  if (parseInt(params.reviewid) > 100) {
    notFound();

  }
  return (
    <div>
      <h1>review page {params.reviewid} for product {params.productid}</h1>

    </div>
  )
}

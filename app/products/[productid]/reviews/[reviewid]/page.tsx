
import { notFound } from 'next/navigation'
import React from 'react'

function getRandom(count: number) {
  return Math.floor(Math.random() * (count + 1));

}
export default function page({ params, }: {
  params: {
    productid: string,
    reviewid: string

  }
}) {
  const random = getRandom(3);
  if (random >= 4) {
    throw new Error("error loading review")
  }


  if (parseInt(params.reviewid) > 100 || isNaN(parseInt(params.reviewid))) {
    notFound();

  }
  return (
    <div>
      <h1>review page {params.reviewid} for product {params.productid}</h1>

    </div>
  )
}

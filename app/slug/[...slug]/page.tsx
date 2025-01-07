import React from 'react'

export default function page({ params }: { params: { slug: string[] } }) {
  if (params.slug.length === 5) {
    return <h1>vewing docs from features {params.slug.join(',')}</h1>

  } else if (params.slug.length === 4) {
    return <h1>viewing docs from features {params.slug[3]}</h1>

  }
  return (
    <div>
      <h1>slUG PAGE slug</h1>

    </div>
  )
}

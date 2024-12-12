import React, { Suspense } from 'react'
import MovieList from '../movies/MovieList'

const page = () => {
  return (
    <div>
      services pages
      <Suspense fallback={<Loading />}>
        <MovieList />
      </Suspense>

    </div>
  )
}

export default page

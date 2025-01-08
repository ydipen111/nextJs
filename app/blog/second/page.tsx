import React, { Suspense } from 'react'
import MovieList from '../movies/MovieList'

const page = () => {
  return (
    <div>
<<<<<<< HEAD:app/blog/second/page.tsx
      <h1>page3</h1>
=======
      services pages
      <Suspense fallback={<Loading />}>
        <MovieList />
      </Suspense>
>>>>>>> 6fbda84aedd262a091737d0db2c2d33916054474:app/services/page.tsx

    </div>
  )
}

export default page

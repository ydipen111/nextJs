"c"

import React from 'react'

const getDetails = async (id) => {

  const res = await fetch(`https://6758f6c060576a194d129152.mockapi.io/movies/${id}`);
  return res.json();
}

const MovieDetails = async ({ params }) => {
  const { id } = await params;
  const res = await getDetails(id);
  // console.log(res);



  return (
    <div className='p-5 text-xl'>
      <h1>id Parsms
        {/* {props} */}
      </h1>

    </div>
  )
}

export default MovieDetails

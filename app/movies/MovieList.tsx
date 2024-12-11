import axios from "axios"

const MovieList = async () => {
  const res = await axios.get('https://6758f6c060576a194d129152.mockapi.io/movies');
  console.log(res);

  return (
    <div>
      5Movies
      {res && res.data?.map((val) => {
        return <div key={val.id} className="flex flex-col p-4 shadow-2xl bg-blue-300  ">
          <img
            className="h-[399px] w-[399px]"
            src={val.Poster} alt="" />

          <h1 className="text-xl">S.N :{val.id}</h1>
          <h1 className="text-xl">Title :{val.Title}</h1>
          <h2 className="text-xl">Released year: {val.Year}</h2>
          <h2 className="text-xl">Runtime time :{val.Runtime}</h2>



        </div>
      })

      }

    </div>
  )
}

export default MovieList

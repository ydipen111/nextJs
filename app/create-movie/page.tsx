"use client"

import axios from 'axios';
import {  useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const createMovie = async () => {
  const router = useRouter();
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {

    },
    onSubmit: async (values) => {

      try {

        await
          axios.post('https://6758f6c060576a194d129152.mockapi.io/movies', {

            "Title": "The Lion king",
            "Year": "2019",
            "Runtime": "118 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"



          })

        // await fetch('https://mockapi.io/projects/6758f6c060576a194d129153/movies', {
        //   method: 'POST',
        //   // mode: 'no-cors',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     "Title": "The lion king",
        //     "Year": "2019",
        //     "Runtime": "118 min",
        //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"

        //   })
        // })
        router.refresh();
        router.push('/')
        console.log('success');

      } catch (error) {
        console.log(error);

      }
    }

  });


  return (
    <div className='p-5'>
      createMovie
      <form onSubmit={handleSubmit}>
        <div><input type='text' /></div>
        <input className='border-2xl border-black-300' type='text' />
        <button type='submit' className='bg-black p-3 text-white rounded-md' >Submit</button>

      </form>

    </div>
  )
}

export default createMovie

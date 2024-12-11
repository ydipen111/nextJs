"use client"

import { Form, useFormik } from 'formik';
import React, { useState } from 'react'

const createMovie = async () => {
  const [isOpen, Open] = useState();
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {

    },
    onSubmit: (values) => {
      console.log(values);

    }
  });


  return (
    <div className='p-5'>
      createMovie
      <form onSubmit={handleSubmit}>
        <input>input</input>
        <button className='bg-black p-3 text-white rounded-md' >Submit</button>

      </form>

    </div>
  )
}

export default createMovie

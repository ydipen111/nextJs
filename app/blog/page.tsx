"use client"

import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useState } from "react"

export default function page() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  }
  return (
    <div className="p-5">
      <Header />
      <button className="bg-black text-white  font-bold p-2 rounded" onClick={handleClick}>
        {open ? "open the value" : "Close the vaue"}
      </button>
      {
        open ? <h2>Opening value is these</h2 > :
          <h3>Closin value is these</h3>
      }

    </div>
  )
}

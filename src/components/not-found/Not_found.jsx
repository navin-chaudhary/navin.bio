import React from 'react'
import { BiError } from "react-icons/bi";
function Not_found() {
  return (
    <div className="border-none h-[calc(100vh_-_100px)]">
        <h1><BiError/></h1>
      <h1>404 | Page Not Found</h1>
      <p>This page has been moved or was never created.</p>
    </div>
  )
}

export default Not_found

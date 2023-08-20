'use client'

import { useEffect } from "react"

const Error = ({error, reset}: {error: Error, reset: ()=> void}) =>{

  useEffect(() =>{
    console.log(error.message)
  }, [error])

  return(
    <>
      <div>{error.message}</div>
      <button onClick={()=> reset()}>try Again</button>
    </>
    
  )
}

export default Error;

import React from 'react'
import Loading from "../components/Loading"

const Summary = () => {
  return (
    <section className='mt-6 flex-grow'>
        <h2 className='text-xl mb-4 font-semibold'>Generated Article</h2>
        <div id="content" className='mt-2 text-gray-800 space-y-4'>
        <Loading  color="green"/>
        </div>
    </section>
  )
}

export default Summary
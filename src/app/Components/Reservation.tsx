import React from 'react'

const Reservation = () => {
  return (
   <section className='bg-gradient-to-r from-black to-grey-900 py-10 '>
    <div className=' container mx-auto text-center'>
      <h2 className='text-3xl font-bold mb-6 text-white '>Make A Reservation

      </h2>
      <form className='max-w-md mx-auto'>
        <div className='mb-4 text-white'>
          <input type="text" 
          placeholder='Your Name'
          className='w-full p-3 border border-grey-300 rounded-md'
          required/>

        </div>

        <div className='mb-4'>
          <input type="email"
          placeholder='Your Email' 
          className='w-full p-3 border border-grey-300 rounded-md'
          required />

        </div>

        <div className='mb-4'>
          <input type="date"
          className='w-full p-3 border border-grey-300 rounded-md'
          required />

        </div>

        <div className='mb-4'>
          <input type="time"
          className='w-full p-3 border border-grey-300 rounded-md'
          required />

        </div>

        <div className='mb-4'>
  <button className='bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95 transition-all duration-300'>
    Reserved Table
  </button>
</div>


      </form>

    </div>
   </section>
  )
}

export default Reservation

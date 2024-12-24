import React from 'react'

const page = () => {
  return (
    <div>
      <div className=' bg-gradient-to-r from-[#55175781] to-[#833b8a9c]  py-6'>
        
         <div className=' max-w-5xl mx-auto p-6'>
           <div className=' h-[200px] bg-[url(/bg.jpg)] bg-no-repeat bg-cover bg-center   rounded-lg my-4 '>
           <h1 className='text-lg md:text-4xl font-serif font-bold text-center pt-[100px] '>Contact</h1>
           </div>

        <form target='blank' className='flex flex-col gap-6  h- mx-auto bg-white p-8 rounded-lg'  >
        <input type="text"  name='name' id='name' placeholder='Enter Your Name' required className=' focus:outline-none border-b-2 border-[#551757] bg-transparent  w-full h-[50px] p-4' />
        <input type="email" name='email' id='email' placeholder='Enter Your Email' required className=' focus:outline-none border-b-2 border-[#551757] bg-transparent w-full h-[50px] p-4'/>
        <textarea  name="message" id="message" rows={5} placeholder='Enter Your Message' required className=' focus:outline-none border-b-2 border-[#551757] bg-transparent w-full h-[70px] p-4'></textarea>
        <button className='w-[200px] h-[60px] py-[16px] px-[20px] bg-[#551757] text-white rounded-md'>Submit</button>
        </form>
         </div>

      </div>
    </div>
  )
}

export default page

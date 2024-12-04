import React from 'react'

export default function Hero() {
  return (
    <section className='bg-gradient-to-r from-purple-500 to-pink-500 h-lvh w-full flex justify-center items-center text-white '>
      <div>
        <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold leading-2 mb-5'>Manage Any Content <br/> Anywhere</h1>
        <p className='leading-6 w-10/12 m-auto'><a href="https://strapi.io/" className='pe-2 font-bold text-white'>Strapi</a>is the leading open-source headless CMS. It’s 100% JavaScript and fully customizable.</p>
      </div>
    </section>
  )
}

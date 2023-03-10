import React from 'react'

function Footer() {
  return (
    <div className=' bg-black h-[100px] mt-10'>
      <div className='flex flex-row justify-center pb-4 gap-8 max-w-50'>
        <a href='https://github.com/kals-slak' target="_blank" rel="noopener noreferrer">
          <svg className='h-6 w-6 p-0.5 hover:p-0 stroke-current text-white hover:text-[#00df9a]' xmlns="http://www.w3.org/2000/svg" stroke="#fff" viewBox="0 0 24 24">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>
        <a href='https://www.linkedin.com/in/kalyana-sundaram-a9a28a1a3/' target="_blank" rel="noopener noreferrer">
          <svg className='h-6 w-6 p-0.5 hover:p-0 stroke-current text-white hover:text-[#00df9a]' xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a href='https://twitter.com/_kalslak_' target="_blank" rel="noopener noreferrer">
          <svg className='h-6 w-6 p-0.5 hover:p-0 stroke-current text-white hover:text-[#00df9a]' xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
          </svg>
        </a>
        
          
       </div>
        <div className='flex justify-end flex-col'>
          <h1 className='text-white text-center'>Made with ❤️ by  <span className=' font-semibold pl-1'> Kalyana Sundaram</span></h1>
        </div>
       
    </div>
  )
}

export default Footer;
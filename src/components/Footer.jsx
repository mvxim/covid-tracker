import React from "react"

export default function Footer() {
  return (
    <footer className='grow-0 text-center p-4 md:p-8 w-full'>
      <p className='text-sm md:text-base'>
        Данные предоставлены{" "}
        <a
          className='text-blue-600 hover:text-blue-800 underline visited:text-red-700'
          href='https://covid19api.com/'
          target='_blank' rel="noopener noreferrer">
          сovid19api.com
        </a>
      </p>
    </footer>
  )
}

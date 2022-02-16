import React from "react"
import covidImg from "../assets/covid-19.svg"

export default function Header() {
  return (
    <header className='p-4 md:p-8 bg-valhalla grow-0 w-full'>
      <div className='flex gap-4 md:gap-6 xl:gap-8 justify-center text-center items-center'>
        <img
          src={covidImg}
          alt='Схематичный вирус'
          className='w-8 md:w-12 xl:w-16'
        />
        <h1 className='text-base md:text-3xl xl:text-5xl font-bold text-white justify-center'>
          Статистика по COVID-19
        </h1>
      </div>
    </header>
  )
}

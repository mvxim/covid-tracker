import React from "react"

const Loader = () => {
  return (
      <section className="flex flex-col items-center gap-y-8">
        <h2>⏳ Загрузка...</h2>
        <div className="bg-loader w-16 h-16"/>
      </section>
  )
}

export default Loader

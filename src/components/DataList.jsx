import React from "react"
import Filter from "./Filter"

export default function DataList({
  countries, date, options, value, onSelect, onInput, query
}) {
  return (
      <section className="flex flex-col gap-y-5">
        <Filter options={ options }
            value={ value }
            onSelect={ onSelect }
            defaultValue="Сортировка по.."
            query={ query }
            onInput={ onInput }
        />
        { countries
            ? (
                <>
                  <h2 className="text-base md:text-xl font-bold text-valhalla">Подтвержденные случаи COVID-19 за { date } </h2>
                  
                  <ul className="p-4 bg-white rounded md:max-w-prose w-full shadow-md">
                    
                    { countries.map(country =>
                        country["NewConfirmed"] !== 0 &&
                        <li className={ "py-1 flex  justify-between w-full" }
                            key={ country.ID }>
                          <div>
                            { country["Country"] }
                          </div>
                          <div>
                            { country["NewConfirmed"] }
                          </div>
                        </li>
                    ) }
                  </ul>
                </>)
            : (
                <h2 className="text-xl md:text-2xl font-bold text-valhalla pb-6">Cтраны не загрузились. Попробуйте обновить страницу, или вернуться позже 😔</h2>)
        }
      </section>
  )
}

import { useState } from "react"
import DataList from "./DataList"
import Loader from "./Loader"

export default function Main({ countries, date, isLoading, setCountries }) {
  const [ selectedSort, setSelectedSort ] = useState("")
  const [ searchQuery, setSearchQuery ] = useState("")
  const sortOptions = [
    { value: "Country", name: "По названию" },
    { value: "CasesAscending", name: "По возрастанию" },
    { value: "CasesDescending", name: "По убыванию" },
  ]
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }
  
  let sortedCountries
  
  switch (selectedSort) {
    case "Country":
      sortedCountries = [ ...countries ].sort(
          (a, b) => a["Country"].localeCompare(b["Country"]))
      break
    case "CasesAscending":
      sortedCountries = [ ...countries ].sort(
          (a, b) => b["NewConfirmed"] - a["NewConfirmed"])
      break
    case "CasesDescending":
      sortedCountries = [ ...countries ].sort(
          (a, b) => a["NewConfirmed"] - b["NewConfirmed"])
      break
    default:
      sortedCountries = countries
    
  }
  
  const sortedAndSearchedCountries = [ ...sortedCountries ].filter(
      country => country["Country"].toLowerCase().includes(searchQuery.toLowerCase()))
  
  
  return (
      <main className="grow p-4 md:p-8 max-w-screen-lg">
        <div className="flex items-center justify-between">
        
        </div>
        {
          isLoading
              ? <Loader/>
              : <DataList countries={ sortedAndSearchedCountries }
                  date={ date }
                  options={ sortOptions }
                  value={ selectedSort }
                  onSelect={ setSelectedSort }
                  query={ searchQuery }
                  onInput={ handleSearch }/>
        }
      
      </main>
  )
}

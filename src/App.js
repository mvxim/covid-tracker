import moment from "moment"
import { useCallback, useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import api from "./utils/api"

function App() {
  
  const [ countries, setCountries ] = useState([])
  const [ global, setGlobal ] = useState({})
  const [ date, setDate ] = useState("")
  const [ isLoading, setIsLoading ] = useState(true)
  
  const formatDate = (rawDate) => {
    setDate(moment(rawDate).format('LL'))
  }
  
  const fetchInitialData = useCallback(() => {
    api.getCountries()
        .then(res => {
          setCountries(res["Countries"])
          setGlobal(res["Global"])
          formatDate(res["Date"])
          setIsLoading(false)
        })
        .catch(err => console.log(err))
  }, [ countries, global, date ])
  
  
  
  useEffect(() => {
    fetchInitialData()
  }, [])
  
  
  return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header date={date}/>
        <Main countries={ countries }
            date={date}
            setCountries={ setCountries }
            isLoading={ isLoading }/>
        <Footer/>
      </div>
  )
}

export default App

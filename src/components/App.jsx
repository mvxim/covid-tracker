import { useCallback, useEffect, useState } from 'react';
import api from '../utils/api';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {

  const [ countries, setCountries ] = useState([]);
  const [ global, setGlobal ] = useState({});
  const [ date, setDate ] = useState('');
  const [ isLoading, setIsLoading ] = useState(true);

  const formatDate = (rawDate) => {
    const date = new Date(rawDate).toLocaleDateString(
        'ru-ru',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
    );
    setDate(date);
  };

  const fetchInitialData = useCallback(async () => {
    try {
      const countries = await api.getCountries();
      if (countries) {
        setCountries(countries['Countries']);
        setGlobal(countries['Global']);
        formatDate(countries['Date']);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);


  useEffect(() => {
    fetchInitialData();
  }, []);


  return (
      <div className="min-h-screen flex flex-col bg-white items-center text">
        <Header date={ date }/>
        <Main countries={ countries }
            global={ global }
            date={ date }
            setCountries={ setCountries }
            isLoading={ isLoading }/>
        <Footer/>
      </div>
  );
}

export default App;

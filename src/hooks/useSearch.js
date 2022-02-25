import {useState, useMemo} from 'react';

const useSearch = (sortedCountries) => {
  const [ searchQuery, setSearchQuery ] = useState('');

  const sortedAndSearchedCountries = useMemo(()=>{
    console.log('Сработал поиск');
    const searchResults = sortedCountries.filter(
      country => country['Country'].toLowerCase()
          .includes(searchQuery.toLowerCase()))
    return searchResults;
  }, [searchQuery, sortedCountries])

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return {
    searchQuery,
    sortedAndSearchedCountries,
    handleSearch,
  }
}
export default useSearch;
import { useMemo, useState } from 'react';

const useSort = (countries) => {
  const [ selectedSort, setSelectedSort ] = useState('');

  const sortOptions = [
    { value: 'Country', name: 'По названию' },
    { value: 'CasesAscending', name: 'По возрастанию' },
    { value: 'CasesDescending', name: 'По убыванию' },
  ];

  let sortedCountries = useMemo(() => {
    let resultOfSort;
    switch (selectedSort) {
      case 'Country':
        resultOfSort = [ ...countries ].sort(
            (a, b) => a['Country'].localeCompare(b['Country']));
        break;
      case 'CasesDescending':
        resultOfSort = [ ...countries ].sort(
            (a, b) => b['NewConfirmed'] - a['NewConfirmed']);
        break;
      case 'CasesAscending':
        resultOfSort = [ ...countries ].sort(
            (a, b) => a['NewConfirmed'] - b['NewConfirmed']);
        break;
      default:
        resultOfSort = countries;

    }
    return resultOfSort
  }, [selectedSort, countries])

  return {
    sortedCountries,
    sortOptions,
    selectedSort,
    setSelectedSort
  }
}

export default useSort
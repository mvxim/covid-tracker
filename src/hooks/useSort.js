import { useState } from 'react';

const useSort = (countries) => {
  const [ selectedSort, setSelectedSort ] = useState('');

  const sortOptions = [
    { value: 'Country', name: 'По названию' },
    { value: 'CasesAscending', name: 'По возрастанию' },
    { value: 'CasesDescending', name: 'По убыванию' },
  ];

  let sortedCountries;

  switch (selectedSort) {
    case 'Country':
      sortedCountries = [ ...countries ].sort(
          (a, b) => a['Country'].localeCompare(b['Country']));
      break;
    case 'CasesDescending':
      sortedCountries = [ ...countries ].sort(
          (a, b) => b['NewConfirmed'] - a['NewConfirmed']);
      break;
    case 'CasesAscending':
      sortedCountries = [ ...countries ].sort(
          (a, b) => a['NewConfirmed'] - b['NewConfirmed']);
      break;
    default:
      sortedCountries = countries;

  }

  return {
    sortedCountries,
    sortOptions,
    setSelectedSort
  }

}

export default useSort
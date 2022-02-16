import { useState } from 'react';
import Country from './Country';
import DataBox from './DataBox';
import DataList from './DataList';
import Filter from './Filter';

export default function Data({
  global, countries, date, value, query
}) {
  const [ selectedSort, setSelectedSort ] = useState('');
  const [ searchQuery, setSearchQuery ] = useState('');
  const sortOptions = [
    { value: 'Country', name: 'По названию' },
    { value: 'CasesAscending', name: 'По возрастанию' },
    { value: 'CasesDescending', name: 'По убыванию' },
  ];
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  
  let sortedCountries;
  
  switch (selectedSort) {
    case 'Country':
      sortedCountries = [ ...countries ].sort(
          (a, b) => a['Country'].localeCompare(b['Country']));
      break;
    case 'CasesAscending':
      sortedCountries = [ ...countries ].sort(
          (a, b) => b['NewConfirmed'] - a['NewConfirmed']);
      break;
    case 'CasesDescending':
      sortedCountries = [ ...countries ].sort(
          (a, b) => a['NewConfirmed'] - b['NewConfirmed']);
      break;
    default:
      sortedCountries = countries;
    
  }
  
  const sortedAndSearchedCountries = [ ...sortedCountries ].filter(
      country => country['Country'].toLowerCase()
          .includes(searchQuery.toLowerCase()));
  
  return (
      <section className="flex flex-col gap-y-5 items-center">
        <h2 className="text-base md:text-xl font-bold text-valhalla">
          Заболеваемость COVID-19 в мире за { date }
        </h2>
        { global && <DataBox global={global}/>
        }
        { countries
            ? (
                <>
                  <h2 className="text-base md:text-xl font-bold text-valhalla">
                    Подтвержденные случаи в разбивке по странам
                  </h2>
                  <Filter options={ sortOptions }
                      value={ value }
                      onSelect={ setSelectedSort }
                      defaultValue="Сортировка по.."
                      query={ query }
                      onInput={ handleSearch }
                  />
                  <DataList date={ date }
                      filteredCountryList={ sortedAndSearchedCountries }/>
                </>)
            : (<h2 className="text-xl md:text-2xl font-bold text-valhalla pb-6">
              Cтраны не загрузились. Попробуйте обновить страницу, или вернуться позже 😔
            </h2>)
        }
      </section>
  );
}

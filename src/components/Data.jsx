import { useState } from 'react';
import useSort from '../hooks/useSort'
import DataBox from './DataBox';
import DataList from './DataList';
import Filter from './Filter';

export default function Data({
  global, countries, date,
}) {
  const [ searchQuery, setSearchQuery ] = useState('');
  const { sortedCountries, sortOptions, selectedSort, setSelectedSort } = useSort(countries);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortedAndSearchedCountries = [ ...sortedCountries ].filter(
      country => country['Country'].toLowerCase()
          .includes(searchQuery.toLowerCase()));

  return (
      <section className="flex flex-col gap-y-5 items-center">
        <h2 className="text-base md:text-xl font-bold text-valhalla">
          Заболеваемость COVID-19 в мире за { date }
        </h2>
        {
          global && <DataBox global={global}/>
        }
        {
          countries
            ? (
                <>
                  <h2 className="text-base md:text-xl font-bold text-valhalla">
                    Подтвержденные случаи в разбивке по странам
                  </h2>
                  <Filter options={ sortOptions }
                      onSelect={ setSelectedSort }
                      value={selectedSort}
                      defaultValue="Сортировка по.."
                      query={ searchQuery }
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

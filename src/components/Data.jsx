import useSort from '../hooks/useSort'
import useSearch from '../hooks/useSearch'
import DataBox from './DataBox';
import DataList from './DataList';
import Filter from './Filter';

export default function Data({
  global, countries, date,
}) {
  const { sortedCountries, sortOptions, selectedSort, setSelectedSort } = useSort(countries);
  const {searchQuery, sortedAndSearchedCountries, handleSearch} = useSearch(sortedCountries);

  return (
      <section className="flex flex-col gap-y-5 items-center">
        <h2 className="text-base md:text-xl font-bold text-valhalla">
          Заболеваемость&nbsp;COVID-19 в&nbsp;мире за&nbsp;{ date }
        </h2>
        {
          global && <DataBox global={global}/>
        }
        {
          countries
            ? (
                <>
                  <h2 className="text-base md:text-lg font-medium text-valhalla">
                    Подтвержденные&nbsp;случаи в&nbsp;разбивке по&nbsp;странам
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
              Cтраны не&nbsp;загрузились. Попробуйте обновить&nbsp;страницу, или&nbsp;вернуться&nbsp;позже 😔
            </h2>)
        }
      </section>
  );
}

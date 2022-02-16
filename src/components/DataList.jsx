import React from 'react';
import Country from './Country';

const DataList = ({ filteredCountryList }) => {
  return (
      filteredCountryList.length > 0 ?
          <>
            <ul
                className="p-4 bg-white rounded md:max-w-prose w-full shadow-md">
              {
                filteredCountryList.map(country =>
                    country['NewConfirmed'] !== 0 &&
                    <Country key={ country.ID }
                        countryData={ country }/>
                )
              }
            </ul>
          </>
          :
          <p className="text-valhalla pb-6">
            Такой страны в списке нет. Может, опечатались?
          </p>);
  
};

export default DataList;

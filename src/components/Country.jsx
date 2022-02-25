import React from 'react';
import useNumbersWithCommas from '../hooks/useNumbersWithCommas';

const Country = ({countryData}) => {
  return (
      <li className={ `px-4 py-2 my-1 last-of-type:my-0
      flex rounded bg-white hover:bg-blue-50
      border hover:border-gray-400
      shadow-sm hover:shadow-md
      justify-between w-full
      cursor-pointer` }>
        <div>
          { countryData["Country"] }
        </div>
        <div>
          { useNumbersWithCommas(countryData["NewConfirmed"]) }
        </div>
      </li>
  );
};

export default Country;

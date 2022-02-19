import React from 'react';
import useNumbersWithCommas from '../hooks/useNumbersWithCommas';

const Country = ({countryData}) => {
  return (
      <li className={ "py-1 flex  justify-between w-full" }>
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

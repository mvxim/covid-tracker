import React from 'react';

const Country = ({countryData}) => {
  return (
      <li className={ "py-1 flex  justify-between w-full" }>
        <div>
          { countryData["Country"] }
        </div>
        <div>
          { countryData["NewConfirmed"] }
        </div>
      </li>
  );
};

export default Country;

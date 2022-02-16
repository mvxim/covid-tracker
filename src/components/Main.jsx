import Data from './Data';
import Loader from './Loader';

export default function Main({ global, countries, date, isLoading }) {
  return (
      <main className="grow p-4 md:p-8 w-full">
        {
          isLoading
              ? <Loader/>
              : <Data
                  global={ global }
                  countries={ countries }
                  date={ date }/>
        }
      </main>
  );
}

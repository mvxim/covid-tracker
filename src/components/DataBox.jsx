import useNumbersWithCommas from '../hooks/useNumbersWithCommas';

const DataBox = ({global}) => {
  const {"NewConfirmed": newConfirmed, "NewDeaths":newDeaths, "TotalDeaths": totalDeaths, "TotalConfirmed": totalConfirmed} = global
  
  return (
      <article className="flex flex-col gap-y-4 md:flex-row gap-x-4 justify-center w-full max-w-prose">
        {/* box 1 */}
        <div className="bg-blue-200 p-3 md:p-10 rounded w-full">
          <h2 className="text-center font-bold text-base md:text-xl mb-2">Заболели</h2>
          <div className="text-center">
            <span className="font-bold">Сегодня:</span> {useNumbersWithCommas(newConfirmed)}
          </div>
          <div className="text-center">
            <span className="font-bold">Всего:</span> {useNumbersWithCommas(totalConfirmed)}
          </div>
        </div>
        {/* box 2 */}
        <div className="bg-blue-200 p-3 md:p-10 rounded w-full">
          <h2 className="text-center font-bold text-base md:text-xl mb-2">Умерли</h2>
          <div className="text-center">
            <span className="font-bold">Сегодня:</span> {useNumbersWithCommas(newDeaths)}
          </div>
          <div className="text-center">
            <span className="font-bold">Всего:</span> {useNumbersWithCommas(totalDeaths)}
          </div>
        </div>
      </article>
  );
};

export default DataBox;

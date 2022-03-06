const Filter = ({ options, defaultValue, value, onSelect, onInput, query }) => {
  return (
    <section className="p-2 bg-white rounded shadow-md flex flex-col justify-start gap-y-2 w-full gap-x-4 md:max-w-prose md:flex-row ">
      <select
        className="border-deep-carrot-orange rounded p-1"
        onChange={(event) => onSelect(event.target.value)}
        value={value}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <input
        className="w-full rounded px-2 py-1 text-gray-400 placeholder:italic placeholder:text-slate-400"
        type="text"
        value={query}
        onChange={onInput}
        placeholder="Введите назваие страны"
      />
    </section>
  );
};

export default Filter;

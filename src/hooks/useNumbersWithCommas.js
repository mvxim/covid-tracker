const useNumbersWithCommas = (rawNumber) => {
  return rawNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default useNumbersWithCommas

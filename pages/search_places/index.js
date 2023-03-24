import  { useMemo , useState } from "react";
import Select from "react-select";
import countryList from 'react-select-country-list';
const CountrySelect = () => {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  return (
    <Select options={options} value={value} onChange={changeHandler} />
  );
};
export default CountrySelect;
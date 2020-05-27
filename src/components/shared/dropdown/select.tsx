import React from 'react';
import './select.scss';

interface DropdownProps {
  arrayForSelect: {
    name: string;
    id: number;
  }[];
  initialOptionId: number;
  parentValueHandler: Function;
}

export default ({ arrayForSelect, initialOptionId, parentValueHandler }: DropdownProps) => {
  const listOfOptions = arrayForSelect.map((item) =>
    <option value={item.name} key={item.id}>{item.name}</option>);
  const defaultValueOption = arrayForSelect.find((item) => item.id === initialOptionId);
  console.log('defaultValueProduct', defaultValueOption);
  const [currentValue, setCurrentValue] = React.useState(defaultValueOption?.name);
  const onChangeHandler = () => {
    setCurrentValue(event.target.value);
    parentValueHandler(event.target.value);
  };
  return (
    <select
      className="dropdown"
      name="dropdown-list"
      value={currentValue}
      onChange={() => onChangeHandler(event.target.value)}
    >
      {listOfOptions}
    </select>
  );
};

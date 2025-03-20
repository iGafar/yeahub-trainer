import { useState } from 'react';
import Select, {
  ActionMeta,
  GroupBase,
  OnChangeValue,
  Props,
} from 'react-select';
import { customStyles } from './CustomSelect.style';

export interface SelectOption {
  value: string | number;
  label: string;
}

interface CustomSelectProps<
  Option = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends Props<Option, IsMulti, Group> {
  placeholder?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  defaultValue?: OnChangeValue<Option, IsMulti> | null;
}

export default function CustomSelect<
  Option = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: CustomSelectProps<Option, IsMulti, Group>) {
  const {
    options,
    onChange,
    placeholder = 'Select...',
    isClearable = true,
    isSearchable = true,
    isDisabled = false,
    isLoading = false,
    defaultValue = null,
    ...rest
  } = props;

  const [selectedValue, setSelectedValue] = useState<OnChangeValue<
    Option,
    IsMulti
  > | null>(defaultValue);

  const handleChange = (
    newValue: OnChangeValue<Option, IsMulti>,
    action: ActionMeta<Option>,
  ) => {
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue, action);
    }
  };

  return (
    <Select
      options={options}
      value={selectedValue}
      onChange={handleChange}
      placeholder={placeholder}
      isClearable={isClearable}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      isLoading={isLoading}
      styles={customStyles<Option, IsMulti, Group>()}
      className="react-select"
      {...rest}
    />
  );
}

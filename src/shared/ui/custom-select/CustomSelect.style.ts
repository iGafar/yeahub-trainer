import { CSSObjectWithLabel, GroupBase, StylesConfig } from 'react-select';

export const customStyles = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(): StylesConfig<Option, IsMulti, Group> => ({
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
  }),
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    boxShadow: 'none',
    padding: 6,
    gap: 4,
    borderRadius: '0 0 6px 6px',
  }),
  menuList: (provided: CSSObjectWithLabel) => ({
    ...provided,
    border: 'none',
    borderColor: 'red',
    padding: 0,
  }),
  indicatorSeparator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    display: 'none',
  }),
  option: (provided: CSSObjectWithLabel, state) => ({
    ...provided,
    border: 'none',
    color: 'var(--purple-800)',
    backgroundColor: state.isFocused ? 'var(--black-10)' : 'var(--white)',
    borderRadius: 12,
    padding: '8px 10px',
  }),
  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    border: 'none',
  }),
  multiValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    border: 'none',
  }),
  multiValueRemove: (provided: CSSObjectWithLabel) => ({
    ...provided,
    border: 'none',
  }),
});

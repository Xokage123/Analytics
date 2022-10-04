import * as React from 'react';
import Select, { MultiValue, SingleValue, StylesConfig } from 'react-select';

import cn from 'classnames';

import ControlComponent from './components/control';
import DropdownIndicatorComponent from './components/dropdownIndicator';
import { Option, SelectProps } from './type';

const customStyles: StylesConfig<Option, boolean> = {
  control: (provided) => {
    return {
      ...provided,
      border: 'none',
      boxShadow: 'none',
      fontSize: 'var(--font-size-s)',
      cursor: 'pointer',
    };
  },
  input: (provided) => ({
    ...provided,
    fontSize: 'var(--font-size-s)',
    margin: 0,
    padding: 0,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    '>:first-of-type': {
      margin: 0,
      padding: 0,
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  menu: (provided) => ({
    ...provided,

    width: 167,
    margin: 0,
    padding: 0,

    borderRadius: 'var(--border-radius-s)',
  }),
  menuList: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    fontSize: 'var(--font-size-s)',
  }),
  option: (provided) => ({
    ...provided,
    padding: '12px 16px',

    cursor: 'pointer',
  }),
};

const CustomSelect: React.FC<SelectProps> = (props) => {
  const { options, placeholder, handleChange, label } = props;

  const [value, setValue] = React.useState<string>();

  const [isOpen, setIsOpen] = React.useState(false);

  const onChange = (newOption: SingleValue<Option> | MultiValue<Option>) => {
    if (newOption) {
      const { value } = newOption as Option;

      setValue(value);

      handleChange(value);
    }
  };

  const selectValue = React.useMemo(() => {
    let selectOption = undefined;
    let selectOptions = [];

    selectOptions = options as Option[];

    selectOption = selectOptions.find((option) => option.value === value);

    return selectOption;
  }, [options, value]);

  return (
    <div className={cn('flex-col full-width')}>
      {label ? (
        <label>
          <p>{label}</p>
        </label>
      ) : null}

      <Select
        onMenuOpen={() => {
          setIsOpen(true);
        }}
        onMenuClose={() => {
          setIsOpen(false);
        }}
        value={selectValue}
        styles={customStyles}
        placeholder={placeholder}
        onChange={onChange}
        options={options}
        components={{
          DropdownIndicator: (props) => {
            return <DropdownIndicatorComponent isOpen={isOpen} {...props} />;
          },
          Control: (props) => {
            return <ControlComponent {...props} />;
          },
          IndicatorSeparator: null,
        }}
      />
    </div>
  );
};

export default CustomSelect;

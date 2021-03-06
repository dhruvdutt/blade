import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import RadioButtonContext from './RadioContext';
import RadioOption from './RadioOption';

const Radio = ({ value, onChange, defaultValue, children }) => {
  const [selected, setSelected] = useState(value || defaultValue);

  const onValueChange = useCallback(
    (newValue) => {
      if (!value) {
        setSelected(newValue);
      }
      if (onChange) onChange(newValue);
    },
    [onChange, value],
  );

  const contextValue = useMemo(() => ({ value: selected, onChange: onValueChange }), [
    onValueChange,
    selected,
  ]);

  return <RadioButtonContext.Provider value={contextValue}>{children}</RadioButtonContext.Provider>;
};

Radio.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

Radio.defaultProps = {
  value: undefined,
  defaultValue: undefined,
  onChange: () => {},
  children: null,
};

Radio.Option = RadioOption;

export default Radio;

import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import Flex from '../Flex';
import Text from '../Text';
import { getColor } from '../../_helpers/theme';
import Icon from '../Icon';

const styles = {
  label: {
    borderBottomWidth({ isActive }) {
      if (isActive) {
        return '1px';
      }
      return '0px';
    },
    borderBottomColor({ isActive, theme, disabled }) {
      if (disabled) {
        if (isActive) {
          return getColor(theme, 'primary.300');
        }
      }
      if (isActive) {
        return getColor(theme, 'primary.800');
      }
      return 'transparent';
    },
  },
};

const StyledTabButton = styled(TouchableOpacity)(
  (props) => `
min-width: 48px;
background-color: ${props.backgroundColor};
border-radius: 2px;
`,
);

const Label = styled(View)`
  padding: 8px 0px;
  border-bottom-width: ${styles.label.borderBottomWidth};
  border-bottom-color: ${styles.label.borderBottomColor};
`;

const getLabelColor = ({ isActive, disabled }) => {
  let color = 'shade.960';

  if (isActive) {
    color = disabled ? 'primary.700' : 'primary.800';
  } else {
    color = disabled ? 'shade.940' : 'shade.960';
  }
  return color;
};

const Tab = ({ label, isActive, onPress, disabled }) => {
  const initialLabelColor = getLabelColor({ isActive, disabled });

  const [tabBackground, setTabBackground] = useState('transparent');
  const [labelColor, setLabelColor] = useState(initialLabelColor);

  const theme = useContext(ThemeContext);

  const onPressIn = () => {
    if (isActive) {
      setLabelColor('primary.900');
      setTabBackground(getColor(theme, 'primary.200'));
      return;
    }
    setLabelColor('shade.970');
    setTabBackground(getColor(theme, 'tone.940'));
  };

  const onPressOut = () => {
    setLabelColor(getLabelColor({ isActive, disabled }));
    setTabBackground('transparent');
  };
  return (
    <Flex flex={1} flexDirection="row" justifyContent="center">
      <StyledTabButton
        activeOpacity={1}
        disabled={disabled}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        backgroundColor={tabBackground}
      >
        <Flex alignItems="center" flexDirection="row">
          <Label isActive={isActive} disabled={disabled}>
            <Icon name="info" fill={labelColor} size="small" />
            <View>
              <Text color={labelColor} disabled={disabled} size="medium">
                {label}
              </Text>
            </View>
          </Label>
        </Flex>
      </StyledTabButton>
    </Flex>
  );
};

Tab.propTypes = {
  isActive: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default Tab;

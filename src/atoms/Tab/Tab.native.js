import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import Flex from '../Flex';
import Text from '../Text';
import { getColor } from '../../_helpers/theme';
import Icon from '../Icon';
import Space from '../Space';
import icons from '../../icons';
import automation from '../../_helpers/automation-attributes';

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
    margin() {
      return [0, 0, 0, 0.5];
    },
  },
};

const StyledTabButton = styled(TouchableOpacity)(
  (props) => `
min-width: 48px;
background-color: ${props.backgroundColor};
border-top-left-radius: 2px;
border-top-right-radius: 2px;
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

const Tab = ({ label, isActive, icon, onPress, disabled, testID }) => {
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
    const color = getLabelColor({ isActive, disabled });
    setLabelColor(color);
    setTabBackground('transparent');
  };

  const isValidIcon = icons[icon];
  return (
    <Flex flex={1} justifyContent="center">
      <StyledTabButton
        activeOpacity={1}
        disabled={disabled}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        backgroundColor={tabBackground}
        {...automation(testID)}
      >
        <Flex alignItems="center" alignSelf="center" flexDirection="row" flexWrap="wrap">
          <Label isActive={isActive} disabled={disabled}>
            {isValidIcon && <Icon name={icon} fill={labelColor} size="small" />}
            <Space margin={styles.label.margin()}>
              <View>
                <Text color={labelColor} disabled={disabled} numberOfLines={1} size="medium">
                  {label}
                </Text>
              </View>
            </Space>
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
  icon: PropTypes.string,
  testID: PropTypes.string,
};

Tab.defaultProps = {
  isActive: false,
  onPress: () => {},
  disabled: false,
  testID: 'ds-tab',
};

export default Tab;

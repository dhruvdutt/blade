import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
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
          return getColor(theme, 'primary.930');
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
    color({ isActive, disabled, isPressed }) {
      if (isPressed) {
        if (isActive) {
          return 'primary.900';
        }
        return 'shade.970';
      } else if (isActive) {
        return disabled ? 'primary.700' : 'primary.800';
      } else {
        return disabled ? 'shade.940' : 'shade.960';
      }
    },
  },
  tab: {
    backgroundColor({ theme, isActive, isPressed }) {
      if (isPressed) {
        if (isActive) {
          return getColor(theme, 'primary.920');
        }
        return getColor(theme, 'tone.940');
      }
      return 'transparent';
    },
  },
};

const StyledTabButton = styled(TouchableOpacity)`
  min-width: 48px;
  background-color: ${styles.tab.backgroundColor};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

const Label = styled(View)`
  padding: 8px 0px;
  border-bottom-width: ${styles.label.borderBottomWidth};
  border-bottom-color: ${styles.label.borderBottomColor};
`;

const Tab = ({ label, isActive, icon, onPress, disabled, testID }) => {
  const [isPressed, setTabPressed] = useState(false);

  const onPressIn = useCallback(() => {
    setTabPressed(true);
  }, []);

  const onPressOut = useCallback(() => {
    setTabPressed(false);
  }, []);

  const isValidIcon = icons[icon];

  const labelColor = styles.label.color({ isActive, disabled, isPressed });

  return (
    <Flex flex={1} justifyContent="center">
      <StyledTabButton
        activeOpacity={1}
        disabled={disabled}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        isPressed={isPressed}
        isActive={isActive}
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
  icon: PropTypes.oneOf(Object.keys(icons)),
  testID: PropTypes.string,
};

Tab.defaultProps = {
  isActive: false,
  onPress: () => {},
  disabled: false,
  testID: 'ds-tab',
};

export default Tab;

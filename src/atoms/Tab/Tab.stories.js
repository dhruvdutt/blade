import React from 'react';
import { storiesOf } from '@storybook/react';
import Tab from './Tab';
import Flex from '../Flex';
import View from '../View';

storiesOf('Tabs', module)
  .addParameters({
    component: Tab,
  })
  .add('default', () => (
    <View>
      <Flex flexDirection="row">
        <View>
          <Tab isActive={true} label="Selected with icon" icon="info" />
        </View>
      </Flex>
      <Flex flexDirection="row">
        <View>
          <Tab isActive={false} label="Unselected with icon" icon="info" />
        </View>
      </Flex>
      <Flex flexDirection="row">
        <View>
          <Tab isActive={false} disabled={true} label="Unselected with disabled" />
        </View>
      </Flex>
      <Flex flexDirection="row">
        <View>
          <Tab isActive={true} disabled={true} label="Selected with disabled" />
        </View>
      </Flex>
    </View>
  ))
  .add('with Tabs Container', () => (
    <Flex flexDirection="row">
      <View>
        <Tab isActive={true} label="Selected with icon" icon="info" />
        <Tab isActive={false} label="Unselected with icon" icon="info" />
      </View>
    </Flex>
  ));

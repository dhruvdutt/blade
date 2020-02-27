import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import Tab from './Tab';
import Flex from '../Flex';
import View from '../View';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .addParameters({
    component: Tab,
  })
  .add('show tabs', () => (
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
  ));

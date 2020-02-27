import React from 'react';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
//import { text, boolean, select } from '@storybook/addon-knobs';
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
    <Flex flexDirection="row">
      <View>
        {/* <Text>shridhar</Text>
        <Text>Bavannawar</Text> */}
        <Tab isActive={true} label="Payments" />
        <Tab isActive={false} label="Payment Links" />
        <Tab isActive={false} label="Settlements" />
      </View>
      {/* <Tab isActive={true} label="shridhar" /> */}
      {/* <Tab isActive={true} label="bavannawar" /> */}
      {/* <Tab isActive={false} label="Argentina" /> */}
      {/* <Tab isActive={false} label="Brazil" disabled={true} /> */}
    </Flex>
  ));

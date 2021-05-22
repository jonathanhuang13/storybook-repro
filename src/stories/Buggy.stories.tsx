import React from 'react';
import { Story, Meta } from '@storybook/react';

import TestComponent, { Props } from '../TestComponent';

export default {
  title: 'Buggy',
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' }, // Still buggy after commented out and relying on preview.js
  },
  component: TestComponent,
} as Meta;

const Template: Story<Props> = (args) => <TestComponent {...args} />;

export const Base = Template.bind({});
Base.args = {
  onClickFoo: () => console.log('Hello'), // Still buggy after commented out
};

import React from 'react';
import { Story, Meta } from '@storybook/react';

import TestComponent, { Props } from '../TestComponent';

export default {
  title: 'Works',
  component: TestComponent,
  argTypes: {
    onClickFoo: { action: 'clicked' },
  },
} as Meta;

const Template: Story<Props> = (args) => <TestComponent {...args} />;

export const Base = Template.bind({});
Base.args = {
  // onClickFoo: () => console.log('Hello'), // Buggy if uncommented
};

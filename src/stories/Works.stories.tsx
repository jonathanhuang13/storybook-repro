import React from 'react';
import { Story, Meta } from '@storybook/react';

import GoodComponent, { Props } from '../GoodComponent';

export default {
  title: 'Works',
  component: GoodComponent,
} as Meta;

const Template: Story<Props> = (args) => <GoodComponent {...args} />;

export const Base = Template.bind({});
Base.args = {
  size: 'large',
};

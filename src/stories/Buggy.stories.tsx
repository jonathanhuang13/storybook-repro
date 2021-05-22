import React from 'react';
import { Story, Meta } from '@storybook/react';

import BuggyComponent, { Props, Size } from '../BuggyComponent';

export default {
  title: 'Buggy',
  component: BuggyComponent,
} as Meta;

const Template: Story<Props> = (args) => <BuggyComponent {...args} />;

export const Base = Template.bind({});
Base.args = {
  size: Size.Large,
};

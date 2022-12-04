import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Status from '../components/Status';

export default {
  title: 'Status',
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const KnownStatuses = Template.bind({});
KnownStatuses.args = {
  status: { flag: 'RAISED', lights: 'ON' },
};

export const UnknownStatus = Template.bind({});
UnknownStatus.args = {
  status: { new: 'ON' } as any,
};

export const NullValue = Template.bind({});
NullValue.args = {
  status: { flag: 'RAISED', lights: null },
};

export const NoStatus = Template.bind({});

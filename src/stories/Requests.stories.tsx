import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Requests from '../components/Requests';

export default {
  title: 'Requests',
  component: Requests,
} as ComponentMeta<typeof Requests>;

const Template: ComponentStory<typeof Requests> = (args) => (
  <Requests {...args} />
);

export const AllRequestTypes = Template.bind({});
AllRequestTypes.args = {
  requests: [
    { action: 'RAISE' },
    { action: 'LOWER' },
    { action: 'LIGHTS', value: 0 },
    { action: 'LIGHTS', value: 1 },
  ],
};

export const NoRequests = Template.bind({});

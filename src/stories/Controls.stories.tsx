import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Controls from '../components/Controls';
import { within } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

export default {
  title: 'Controls',
  component: Controls,
} as ComponentMeta<typeof Controls>;

const Template: ComponentStory<typeof Controls> = (args) => (
  <Controls {...args} />
);

export const DefaultConfiguration = Template.bind({});
DefaultConfiguration.args = {
  configuration: { hasLights: true, hasMotor: true, hasWeatherProofFlag: true },
};
DefaultConfiguration.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByText('Raise'));
};

export const NoConfiguration = Template.bind({});

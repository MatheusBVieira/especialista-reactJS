import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { ButtonProps } from "../components/Button/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'resetar senha',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'resetar senha',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  label: 'resetar senha',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  label: 'resetar senha',
};
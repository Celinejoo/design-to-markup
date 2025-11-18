import Button from '@/pages/shared/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  argTypes: {
    size: {
      control: 'radio',
      options: ['xlarge', 'large', 'medium', 'small'],
    },
    varient: {
      control: 'radio',
      options: ['primary', 'grey'],
    },
    icon: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    full: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    size: 'medium',
    varient: 'primary',
    icon: false,
    full: false,
    disabled: false,
    label: '버튼입니다..',
  },
};

export const xlarge: Story = {
  args: {
    size: 'xlarge',
    varient: 'primary',
    icon: false,
    full: false,
    disabled: false,
    label: '버튼입니다..',
  },
};
export const large: Story = {
  args: {
    size: 'large',
    varient: 'primary',
    icon: false,
    full: false,
    disabled: false,
    label: '버튼입니다..',
  },
};

export const medium: Story = {
  args: {
    size: 'medium',
    varient: 'primary',
    icon: false,
    full: false,
    disabled: false,
    label: '버튼입니다..',
  },
};

export const small: Story = {
  args: {
    size: 'small',
    varient: 'primary',
    icon: false,
    full: false,
    disabled: false,
    label: '버튼입니다..',
  },
};

export const full: Story = {
  args: {
    size: 'large',
    varient: 'primary',
    icon: false,
    full: true,
    disabled: false,
    label: '버튼입니다..',
  },
};

export const Gray: Story = {
  args: {
    size: 'large',
    varient: 'grey',
    icon: false,
    full: false,
    disabled: false,
    label: '버튼입니다..',
  },
};

export const disabled: Story = {
  args: {
    size: 'large',
    varient: 'grey',
    icon: false,
    full: false,
    disabled: true,
    label: '버튼입니다..',
  },
};

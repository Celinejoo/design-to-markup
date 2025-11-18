import HamburgerButton from '@/pages/shared/HamburgerButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HamburgerButton> = {
  title: 'shared/HamburgerButton',
  component: HamburgerButton,
  argTypes: {
    isMenuOpen: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof HamburgerButton>;

export const Default: Story = {
  args: {
    isMenuOpen: true,
    setIsMenuOpen: () => {},
  },
};

export const Close: Story = {
  args: {
    isMenuOpen: true,
    setIsMenuOpen: () => {},
  },
};

import MobileNav from '@/pages/shared/MobileNav';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MobileNav> = {
  title: 'shared/MobileNav',
  argTypes: {
    isMenuOpen: {
      control: 'boolean',
    },
  },
  component: MobileNav,
};

export default meta;

type Story = StoryObj<typeof MobileNav>;

export const Default: Story = {
  args: {
    isMenuOpen: true,
  },
};

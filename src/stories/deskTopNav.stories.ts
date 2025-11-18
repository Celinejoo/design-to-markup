import DesktopNav from '@/pages/shared/DeskTopNav';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DesktopNav> = {
  title: 'shared/DeskTopNav',
  component: DesktopNav,
};

export default meta;

type Story = StoryObj<typeof DesktopNav>;

export const Default: Story = {};

import ImageTab from '@/pages/components/ImageTab';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ImageTab> = {
  title: 'components/ImageTab',
  component: ImageTab,
};

export default meta;

type Story = StoryObj<typeof ImageTab>;

export const Default: Story = {};

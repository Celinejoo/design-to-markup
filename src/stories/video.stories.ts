import Video from '@/pages/components/Video';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Video> = {
  title: 'components/Video',
  component: Video,
};

export default meta;

type Story = StoryObj<typeof Video>;

export const Default: Story = {};

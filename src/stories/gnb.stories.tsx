import Gnb from '@/pages/components/Gnb';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Gnb> = {
  title: 'components/Gnb',
  component: Gnb,
};

export default meta;

type Story = StoryObj<typeof Gnb>;

export const Default: Story = {};

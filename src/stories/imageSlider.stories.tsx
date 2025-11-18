import ImageSlider from '@/pages/components/ImageSlider';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ImageSlider> = {
  title: 'components/ImageSlider',
  component: ImageSlider,
};

export default meta;

type Story = StoryObj<typeof ImageSlider>;

export const Default: Story = {};

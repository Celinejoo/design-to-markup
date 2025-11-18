import Tag from '@/pages/shared/Tag';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tag> = {
  title: 'shared/Tag',
  component: Tag,
  argTypes: {
    label: {
      control: 'text',
      description: '메인 타이틀 텍스트',
    },
    variant: {
      control: 'radio',
      options: ['green', 'defalut'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: '태그',
    variant: 'green',
  },
};

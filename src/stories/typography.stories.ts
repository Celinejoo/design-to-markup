import Typography from '@/pages/shared/Typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['Heading1', 'Heading2', 'Heading3', 'Body1', 'Body2', 'Caption'],
      description: '타이포그래피 타입',
    },
    color: {
      control: 'select',
      options: ['headline', 'paragraph', 'captions', 'link', 'white', 'gray', 'darkgreen'],
      description: '텍스트 색상',
    },
    children: {
      control: 'text',
      description: '텍스트 내용',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Heading 스타일들
export const Heading1: Story = {
  args: {
    type: 'Heading1',
    color: 'headline',
    children: 'Heading 1 스타일',
  },
};

export const Heading2: Story = {
  args: {
    type: 'Heading2',
    color: 'headline',
    children: 'Heading 2 스타일',
  },
};

export const Heading3: Story = {
  args: {
    type: 'Heading3',
    color: 'headline',
    children: 'Heading 3 스타일',
  },
};

export const Body1: Story = {
  args: {
    type: 'Body1',
    color: 'headline',
    children: 'Body 1 텍스트 스타일입니다.',
  },
};

export const Body2: Story = {
  args: {
    type: 'Body2',
    color: 'headline',
    children: 'Body 2 텍스트 스타일입니다.',
  },
};

// Caption
export const Captions: Story = {
  args: {
    type: 'Captions',
    color: 'captions',
    children: 'Caption 텍스트 스타일입니다.',
  },
};

export const Link: Story = {
  args: {
    type: 'Link',
    color: 'link',
    children: 'link 텍스트 스타일입니다.',
  },
};

export const Paragraph: Story = {
  args: {
    type: 'Paragraph',
    color: 'paragraph',
    children: 'paragraph 텍스트 스타일입니다.',
  },
};

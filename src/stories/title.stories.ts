import Title from '@/pages/shared/Title';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Title> = {
  title: 'shared/Title',
  component: Title,
  argTypes: {
    title: {
      control: 'text',
      description: '메인 타이틀 텍스트',
    },
    subtitle: {
      control: 'text',
      description: '서브 타이틀 텍스트',
    },
    isColor: {
      control: 'boolean',
      description: 'true 일 때 captions 색상 사용',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    title: '제목영역입니다.',
    subtitle: '서브타이틀',
    isColor: false,
  },
};

export const WithColor: Story = {
  args: {
    title: '배경이 들어간 곳에 쓰는 컬러 변경',
    subtitle: '서브텍스트도 captions 컬러로 표시됩니다.',
    isColor: true,
  },
};

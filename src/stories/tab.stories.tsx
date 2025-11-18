import TabMenu from '@/pages/shared/Tabs/TabMenu';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof TabMenu> = {
  title: 'shared/Tabs',
  component: TabMenu,
  argTypes: {
    tabs: { control: 'object' },
    activeTab: { control: 'text' },
    setActiveTab: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof TabMenu>;

export const Default: Story = {
  args: {
    tabs: ['탭 영역 1', '탭 영역 2', '탭 영역 3'],
    activeTab: '탭 영역 1',
  },

  render: (args) => {
    const { tabs, activeTab: initialActiveTab } = args;

    const [activeTab, setActiveTab] = useState(initialActiveTab);

    return <TabMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />;
  },
};

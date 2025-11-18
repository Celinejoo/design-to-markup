import LanguageDrodown from '@/pages/shared/LanguageDrodown';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LanguageDrodown> = {
  title: 'shared/LanguageDrodown',
  component: LanguageDrodown,
};

export default meta;

type Story = StoryObj<typeof LanguageDrodown>;

export const Default: Story = {};

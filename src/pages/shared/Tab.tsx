'use client';

import Image from 'next/image';
import { useState } from 'react';
import TabContent from './Tabs/TabContent';
import TabMenu from './Tabs/TabMenu';

const TABS = ['탭 영역 1', '탭 영역 2', '탭 영역 3'];

export default function TabsContainer() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const contents = {
    '탭 영역 1': <Image src='/images/tab1.png' alt='탭 메뉴1' width={892} height={600} />,
    '탭 영역 2': <Image src='/images/tab2.png' alt='탭 메뉴2' width={892} height={600} />,
    '탭 영역 3': <Image src='/images/tab3.png' alt='탭 메뉴3' width={892} height={600} />,
  };

  return (
    <div>
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
      <TabContent activeTab={activeTab} contents={contents} />
    </div>
  );
}

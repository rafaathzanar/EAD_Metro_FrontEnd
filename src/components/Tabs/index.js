import React, { useState } from 'react';
/*
Example data 

const tabsData = [
  {
    id: 1,
    label: 'Home',
    image: 'https://via.placeholder.com/100',
    component: <HomeComponent />,
  },
  {
    id: 2,
    label: 'Profile',
    image: 'https://via.placeholder.com/100?text=Profile',
    component: <ProfileComponent />,
  },
  {
    id: 3,
    label: 'Settings',
    image: 'https://via.placeholder.com/100?text=Settings',
    component: <SettingsComponent />,
  },
];
*/

function Tabs({tabsData}) {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex mb-4 justify-center">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            className={`flex items-center p-4 -mb-px border-b-2 transition-colors duration-300 
              ${activeTab === tab.id ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500'}
            `}
          >
            {tab.image && (typeof tab.image === 'string' ? (
              <img src={tab.image} alt={tab.label} className="w-6 h-6 mr-2" />
            ) : (
              <tab.image className="w-6 h-6 mr-2" />
            ))}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-md w-full max-w-10xl mx-auto">
        {tabsData.map((tab) => (
          tab.id === activeTab && (
            <div key={tab.id}>
              {tab.component}
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Tabs;







import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";

const DashboardTabs = ({ activeTab, onTabChange, onCloseDrawer }) => {
  const handleTabClick = (tabId) => {
    onTabChange(tabId);
    onCloseDrawer();
  };
  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "user", label: "Gestion utilisateur" },
    { id: "file", label: "Gestion fichiers/dossier" },
  ];

  const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab);

  return (
    <Tabs isFitted index={activeTabIndex}>
      <TabList style={{ flexDirection: 'column', justifyContent: 'flex-start', borderBottom: 'none' }}>
        {tabs.map((tab) => (
          <Tab key={tab.id} onClick={() => handleTabClick(tab.id)}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
      
    </Tabs>
  );
};

export default DashboardTabs;

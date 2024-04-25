import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";

const DashboardTabs = ({ activeTab, onTabChange }) => {
  const handleTabClick = (tabId) => {
    onTabChange(tabId);
  };
  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "user", label: "Gestion utilisateur" },
    { id: "file", label: "Gestion fichiers/dossier" },
  ];

  return (
    <Tabs isFitted>
      <TabList style={{ flexDirection: 'column', justifyContent: 'flex-start', borderBottom: 'none' }}>
        {tabs.map((tab) => (
          <Tab key={tab.id} onClick={() => handleTabClick(tab.id)} _hover={{}}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
      
    </Tabs>
  );
};

export default DashboardTabs;

import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";

const DashboardTabs = ({ activeTab, onTabChange }) => {
  const handleTabClick = (tabId) => {
    onTabChange(tabId);
  };
  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "addUser", label: "Ajouter Utilisateur" },
    { id: "addFile", label: "Ajouter Fichier" },
  ];

  return (
    <Tabs isFitted>
      <TabList style={{ flexDirection: 'column'}}>
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

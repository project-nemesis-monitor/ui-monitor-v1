import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton,
    Image,
    Center,
    Box
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import DashboardTabs from "./dashboardcomponenets/DashboardTabs";
  
  export default function DrawerNavbar({ onTabChange }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabChange = (tabId) => {
      setActiveTab(tabId);
      onTabChange(tabId); 
    };
  
    return (
      <>
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          colorScheme="#2645F9"
          color={"#2645F9"}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={onOpen}
        />
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
  
          <DrawerContent bg={"#041538"} color={"white"} fontFamily={"marianne"}>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              <Center>
                <Image boxSize="100px" src="/logo1.png" alt="logo" />
              </Center>
            </DrawerHeader>
            <DrawerBody>
              <DashboardTabs activeTab={activeTab} onTabChange={handleTabChange} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
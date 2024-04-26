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
  Box,
  DrawerFooter,
  Button
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import DashboardTabs from "./dashboardcomponenets/DashboardTabs";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function DrawerNavbar({ onTabChange }) {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState(0);
  const onlogout = () => {
    Cookies.remove("sessionToken")
    router.push("/auth/loginapp")
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  const handleCloseDrawer = () => {
    onClose(); 
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
            <DashboardTabs
              activeTab={activeTab}
              onTabChange={handleTabChange}
              onCloseDrawer={handleCloseDrawer}
            />
          </DrawerBody>
          <DrawerFooter>
            <Button  w={"100%"} onClick={onlogout} bg={"red"} fontFamily={"marianne"}>
              Déconnexion
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

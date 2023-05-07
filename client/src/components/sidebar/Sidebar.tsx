import {
  Flex,
  Icon,
  IconButton,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCoin, BsPeople } from "react-icons/bs";
import { FiFile, FiMenu } from "react-icons/fi";
import { IoWalletOutline, IoSettingsOutline } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TfiWorld } from "react-icons/tfi";
import { TbLicense } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [navSize, setNavSize] = useState<90 | 260>(260);
  const [isHover, setIsHoverd] = useState<boolean>(false);

  return (
    <Stack
      position="sticky"
      top={0}
      left={0}
      zIndex={99}
      shadow="4px 0px 6px rgba(94, 73, 155, 0.04)"
      minW={navSize}
      transition="ease .3s all"
      bg="white"
      height="100vh"
      px={4}
    >
      <Flex
        align="center"
        justify={navSize === 260 ? "space-between" : "center"}
        height="90px"
      >
        <Image
          src="/img/logo.png"
          display={navSize === 90 ? "none" : "unset"}
        />
        <IconButton
          aria-label="toggle"
          variant="ghost"
          icon={<Icon as={FiMenu} fontSize="24px" />}
          onClick={() => setNavSize((prev) => (prev === 260 ? 90 : 260))}
        />
      </Flex>
      <Stack
        onMouseMove={() => {
          setNavSize(260);
          setIsHoverd(true);
        }}
        onMouseLeave={() => setIsHoverd(false)}
        h="full"
        py={5}
        overflowY="scroll"
        sx={{
          "&::-webkit-scrollbar": {
            width: "10px",
            display: "none",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
        }}
        align={{ base: "center", lg: "start" }}
      >
        <SidebarItem
          navSize={navSize}
          link="/"
          icon={<Icon as={RxDashboard} fontSize="24px" />}
          text="Dashboard"
        />
          <SidebarItem
            navSize={navSize}
            link="/office"
            icon={<Icon as={HiOutlineOfficeBuilding} fontSize="24px" />}
            text="Office"
          />
        <SidebarItem
          navSize={navSize}
          link="/accounts"
          icon={<Icon as={IoWalletOutline} fontSize="24px" />}
          text="Bank Accounts"
          active
          submenu={[
            { text: "Account", link: "/accounts" },
            { text: "Withdrawal", link: "/withdrawal" },
            { text: "Deposit", link: "/deposit" },
          ]}
        />
        <SidebarItem
          navSize={navSize}
          link="/license"
          icon={<Icon as={TbLicense} fontSize="24px" />}
          text="License"
        />
        <SidebarItem
          navSize={navSize}
          link="/muallem"
          icon={<Icon as={AiOutlineUser} fontSize="24px" />}
          text="Muallem"
        />
        <SidebarItem
          navSize={navSize}
          link="/income"
          icon={<Icon as={BsCoin} fontSize="24px" />}
          text="Income"
        />
        <SidebarItem
          navSize={navSize}
          link="/expense"
          icon={<Icon as={BsCoin} fontSize="24px" />}
          text="Expense"
        />
        <SidebarItem
          navSize={navSize}
          link="/invoice"
          icon={<Icon as={RiFileList3Line} fontSize="24px" />}
          text="Invoice"
        />
        <SidebarItem
          navSize={navSize}
          link="/website"
          icon={<Icon as={TfiWorld} fontSize="24px" />}
          text="Website"
          submenu={[
            { text: "Logo & Others", link: "/website/logo_others" },
            { text: "Package", link: "/website/package" },
            { text: "Testimonial", link: "/website/testimonial" },
            { text: "Useful Articles", link: "/website/article" },
            { text: "Notice", link: "/website/notice" },
            { text: "About", link: "/website/about" },
            { text: "Team", link: "/website/team" },
            { text: "Memberships", link: "/website/membership" },
            { text: "Messages", link: "/website/message" },
          ]}
        />
          <SidebarItem
            navSize={navSize}
            link="/users"
            icon={<Icon as={BsPeople} fontSize="24px" />}
            text="User"
          />
        <SidebarItem
          navSize={navSize}
          link="/report"
          icon={<Icon as={FiFile} fontSize="24px" />}
          text="Report"
        />
          <SidebarItem
            navSize={navSize}
            link="/settings"
            icon={<Icon as={IoSettingsOutline} fontSize="24px" />}
            text="Settings"
            active
            submenu={[{ text: "Session", link: "/session" }]}
          />
      </Stack>
    </Stack>
  );
};

export default Sidebar;

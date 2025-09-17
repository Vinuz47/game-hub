import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeToggle from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"} paddingRight={"20px" }>
      <Image src={logo} alt="Logo" boxSize={"60px"} />
      
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;

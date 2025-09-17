import { IconButton, Icon, Text, HStack } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    
      <IconButton
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        variant="ghost"
        size="lg"
      >
        <Icon>{colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}</Icon>
        <Text>{colorMode === "light" ? "Dark Mode" : "Light Mode"}</Text>
      </IconButton>
   
  );
};

export default ColorModeToggle;

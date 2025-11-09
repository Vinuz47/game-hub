import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { div } from "framer-motion/client";
import { LuArrowDownWideNarrow } from "react-icons/lu";

const PlatformSelector = () => {

  const { data: platforms, error } = usePlatforms();
  
  if (error) return null;

  return (
    <div style={{ paddingLeft: "30px" }}>
      <Menu.Root>
        <Menu.Trigger>
          <Button variant="outline">
            Select Platform <LuArrowDownWideNarrow />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {platforms.map((platform) => (
                <Menu.Item value={platform.slug} key={platform.id}>{platform.name}</Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
};

export default PlatformSelector;

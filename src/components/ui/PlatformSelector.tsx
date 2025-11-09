import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { div } from "framer-motion/client";
import { LuArrowDownWideNarrow } from "react-icons/lu";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <div style={{ paddingLeft: "30px" }}>
      <Menu.Root>
        <Menu.Trigger>
          <Button variant="outline">
            {selectedPlatform ? selectedPlatform.name : "Select Platform"} <LuArrowDownWideNarrow />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {platforms.map((platform) => (
                <Menu.Item
                  value={platform.slug}
                  key={platform.id}
                  onClick={() => onSelectPlatform(platform)}
                >
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
};

export default PlatformSelector;

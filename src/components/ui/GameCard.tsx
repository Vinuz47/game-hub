import type { Game } from "@/hooks/useGames";
import { Card, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useColorMode } from "./color-mode";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body
        backgroundColor={colorMode === "light" ? "black.100" : "black.900"}
      >
        <Heading size="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;

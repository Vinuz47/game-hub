import type { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useColorMode } from "./color-mode";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card.Root width="300px" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body
        backgroundColor={colorMode === "light" ? "black.100" : "black.900"}
      >
        <Heading size="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between" marginTop={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;

import type { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useColorMode } from "./color-mode";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode} = useColorMode();

  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body
        backgroundColor={colorMode === "light" ? "black.100" : "black.900"}
      >
        <Heading size="2xl">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;

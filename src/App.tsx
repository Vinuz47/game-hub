import { Box, Grid, GridItem, Show, useMediaQuery } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import ColorModeToggle from "./components/ui/ColorModeSwitch";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/ui/PlatformSelector";

function App() {
  const [isLargeScreen] = useMediaQuery(["(min-width: 1024px)"]);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show when={isLargeScreen}>
          <Box>
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenre={selectedGenre}
                onSelectGenre={(genre) => setSelectedGenre(genre)}
              />
            </GridItem>
          </Box>
        </Show>

        <GridItem area="main">
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

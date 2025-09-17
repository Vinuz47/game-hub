import { Box, Grid, GridItem, Show, useMediaQuery } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import ColorModeToggle from "./components/ui/ColorModeSwitch";

function App() {
  const [isLargeScreen] = useMediaQuery(["(min-width: 1024px)"]);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px
        }}
      >
        <GridItem area="nav">
          <NavBar />
          
        </GridItem>
        <Show when={isLargeScreen}>
          <Box>
            <GridItem area="aside">
              Aside
            </GridItem>
          </Box>
        </Show>

        <GridItem area="main" >
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

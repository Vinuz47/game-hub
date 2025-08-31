import { Box, Grid, GridItem, Show, useMediaQuery } from "@chakra-ui/react";

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
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show when={isLargeScreen}>
          <Box>
            <GridItem area="aside" bg="gold">
              Aside
            </GridItem>
          </Box>
        </Show>

        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

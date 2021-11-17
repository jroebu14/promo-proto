import React from 'react';
import {
  ChakraProvider,
  Grid,
  GridItem,
  Box,
  Heading,
  theme,
} from '@chakra-ui/react';
import TopPromo from './TopPromo';
import StandardPromo from './StandardPromo';
import SimplePromo from './SimplePromo';
import StylishPromo from './StylishPromo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box width="63rem" maxWidth="100%" margin="0 auto">
        <Grid gap="1rem">
          <GridItem>
            <Heading as="h2">Top promo</Heading>
          </GridItem>
          <GridItem>
            <TopPromo
              headingText="El nuevo despliegue de tropas rusas en la frontera con Ucrania que preocupa a la Unión Europea y Estados Unidos"
              summaryText="Mientras el mundo sigue atento la crisis de migrantes entre Bielorrusia y Polonia, Rusia ha desplazado a miles de soldados a la frontera con Ucrania."
              imageSrc="https://placedog.net/500"
              href="/"
            />
          </GridItem>

          <GridItem>
            <Heading as="h2">Standard promo</Heading>
          </GridItem>
          <GridItem>
            <Grid templateColumns="repeat(3, 1fr)" gap="1rem">
              {Array(3).fill(
                <GridItem>
                  <StandardPromo
                    headingText="El nuevo despliegue de tropas rusas en la frontera con Ucrania que preocupa a la Unión Europea y Estados Unidos"
                    summaryText="Mientras el mundo sigue atento la crisis de migrantes entre Bielorrusia y Polonia, Rusia ha desplazado a miles de soldados a la frontera con Ucrania."
                    imageSrc="https://placedog.net/500"
                    mediaType="video"
                    href="/"
                  />
                </GridItem>
              )}
            </Grid>
          </GridItem>

          <GridItem>
            <Heading as="h2">Simple promo</Heading>
          </GridItem>
          <GridItem>
            <Grid templateColumns="repeat(3, 1fr)" gap="1rem">
              {Array(3).fill(
                <GridItem>
                  <SimplePromo
                    headingText="El nuevo despliegue de tropas rusas en la frontera con Ucrania que preocupa a la Unión Europea y Estados Unidos"
                    summaryText="Mientras el mundo sigue atento la crisis de migrantes entre Bielorrusia y Polonia, Rusia ha desplazado a miles de soldados a la frontera con Ucrania."
                    imageSrc="https://placedog.net/500"
                    mediaType="video"
                    href="/"
                  />
                </GridItem>
              )}
            </Grid>
          </GridItem>

          <GridItem>
            <Heading as="h2">Stylish promo</Heading>
          </GridItem>
          <GridItem>
            <Grid templateColumns="repeat(3, 1fr)" gap="1rem">
              {Array(3).fill(
                <GridItem>
                  <StylishPromo
                    headingText="El nuevo despliegue de tropas rusas en la frontera con Ucrania que preocupa a la Unión Europea y Estados Unidos"
                    summaryText="Mientras el mundo sigue atento la crisis de migrantes entre Bielorrusia y Polonia, Rusia ha desplazado a miles de soldados a la frontera con Ucrania."
                    imageSrc="https://placedog.net/500"
                    mediaType="video"
                    href="/"
                  />
                </GridItem>
              )}
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

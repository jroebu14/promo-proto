import { Grid, GridItem } from '@chakra-ui/react';

import Promo from '../Promo';

const StylishPromo = ({
  headingText,
  summaryText,
  timestamp,
  imageSrc,
  href,
  mediaType,
}) => (
  <Promo
    headingText={headingText}
    summaryText={summaryText}
    timestamp={timestamp}
    imageSrc={imageSrc}
    href={href}
    mediaType={mediaType}
  >
    <Grid bgColor="hotPink">
      <GridItem>
        <Promo.Image>
          {mediaType && <Promo.MediaIndicator size="5rem" color="#fff" />}
        </Promo.Image>
      </GridItem>
      <GridItem p="1rem">
        <Grid gap="1rem">
          <GridItem>
            <Promo.Link>
              <Promo.Heading level="3" fontSize="md" />
            </Promo.Link>
          </GridItem>
          <GridItem>
            <Promo.Timestamp />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  </Promo>
);

export default StylishPromo;

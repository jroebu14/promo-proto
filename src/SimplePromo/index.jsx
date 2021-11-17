import { Grid, GridItem } from '@chakra-ui/react';

import Promo from '../Promo';

const SimplePromo = ({
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
    <Grid gap="1rem">
      <GridItem display="grid" gap="1rem">
        <Promo.Link>
          <Promo.Heading level="3" fontSize="md">
            <Promo.MediaIndicator size="1rem" />
          </Promo.Heading>
        </Promo.Link>
        <Promo.Timestamp />
      </GridItem>
    </Grid>
  </Promo>
);

export default SimplePromo;

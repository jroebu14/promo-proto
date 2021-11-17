import { Grid, GridItem } from '@chakra-ui/react';

import Promo from '../Promo';

const StandardPromo = ({
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
      <GridItem>
        <Promo.Image>
          {mediaType && <Promo.MediaIndicator size="5rem" color="#fff" />}
        </Promo.Image>
      </GridItem>
      <GridItem display="grid" gap="1rem">
        <Promo.Link>
          <Promo.Heading level="3" fontSize="md" />
        </Promo.Link>
        <Promo.Timestamp />
      </GridItem>
    </Grid>
  </Promo>
);

export default StandardPromo;

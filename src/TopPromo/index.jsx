import { Grid, GridItem } from '@chakra-ui/react';

import Promo from '../Promo';

const TopPromo = ({ headingText, summaryText, timestamp, imageSrc, href }) => (
  <Promo
    headingText={headingText}
    summaryText={summaryText}
    timestamp={timestamp}
    imageSrc={imageSrc}
    href={href}
  >
    <Grid templateColumns="repeat(3, 1fr)" gap="1rem">
      <GridItem>
        <Promo.Image />
      </GridItem>
      <GridItem colSpan="2" display="grid" gap="1rem">
        <Promo.Link>
          <Promo.Heading level="3" />
        </Promo.Link>
        <Promo.Summary />
        <Promo.Timestamp />
      </GridItem>
    </Grid>
  </Promo>
);

export default TopPromo;

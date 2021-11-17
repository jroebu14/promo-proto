import { createContext } from 'react';

import PromoTimestamp from './PromoTimestamp';
import PromoHeading from './PromoHeading';
import PromoImage from './PromoImage';
import PromoLink from './PromoLink';
import PromoMediaIndicator from './PromoMediaIndicator';
import PromoSummary from './PromoSummary';

export const Context = createContext();

const Promo = ({
  children,
  headingText,
  summaryText,
  timestamp,
  imageSrc,
  href,
  mediaType,
}) => (
  <Context.Provider
    value={{
      headingText,
      summaryText,
      timestamp,
      imageSrc,
      href,
      mediaType,
    }}
  >
    {children}
  </Context.Provider>
);

Promo.Timestamp = PromoTimestamp;
Promo.Heading = PromoHeading;
Promo.Image = PromoImage;
Promo.Link = PromoLink;
Promo.MediaIndicator = PromoMediaIndicator;
Promo.Summary = PromoSummary;

export default Promo;

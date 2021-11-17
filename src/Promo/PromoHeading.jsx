import { useContext } from 'react';
import { Heading } from '@chakra-ui/react';

import { Context } from '.';

const PromoHeading = ({ level = 3, fontSize, children }) => {
  const { headingText } = useContext(Context);

  return (
    <Heading as={`h${level}`} fontSize={fontSize}>
      {headingText} {children}
    </Heading>
  );
};

export default PromoHeading;

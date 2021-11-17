import { useContext } from 'react';
import { Box } from '@chakra-ui/react';

import { Context } from '.';

const PromoImage = ({ children }) => {
  const { imageSrc, imageAlt } = useContext(Context);
  const image = <img src={imageSrc} alt={imageAlt} />;

  return children ? (
    <Box position="relative">
      {image}
      <Box
        position="absolute"
        top="0"
        left="0"
        bottom="0"
        right="0"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>
    </Box>
  ) : (
    image
  );
};

export default PromoImage;

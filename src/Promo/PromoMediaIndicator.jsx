import { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { BiPlay, BiVolume } from 'react-icons/bi';

import { Context } from '.';

const PromoMediaIndicator = ({ size = '1rem', color = 'currentColor' }) => {
  const { mediaType } = useContext(Context);
  const Icon = {
    video: BiPlay,
    audio: BiVolume,
  }[mediaType];

  return <Box as={Icon} size={size} color={color} />;
};

export default PromoMediaIndicator;

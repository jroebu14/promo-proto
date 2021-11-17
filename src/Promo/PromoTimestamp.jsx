import { useContext } from 'react';
import { Context } from '.';

const PromoTimeStamp = () => {
  const { timestamp } = useContext(Context);

  return <time>{timestamp}</time>;
};

export default PromoTimeStamp;

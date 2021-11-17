import { useContext } from 'react';

import { Context } from '.';

const PromoSummary = () => {
  const { summaryText } = useContext(Context);

  return <p>{summaryText}</p>;
};

export default PromoSummary;

import { useContext } from 'react';
import { Context } from '.';

const PromoLink = ({ children }) => {
  const { href } = useContext(Context);

  return <a href={href}>{children}</a>;
};

export default PromoLink;

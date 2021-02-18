import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './style';

type Buttonprops = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<Buttonprops> = ({ children, loading, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  );
};

export default Button;

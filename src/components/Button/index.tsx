import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './style';

type Buttonprops = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Buttonprops> = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;

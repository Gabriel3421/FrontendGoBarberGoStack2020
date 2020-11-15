import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Background, Container, Content } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="GoBarber" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input name="email" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="forgot">
          {' '}
          <FiArrowLeft /> Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;

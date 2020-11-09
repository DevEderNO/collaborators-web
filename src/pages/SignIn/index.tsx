import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLock, FiUser } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import GoogleLogin from 'react-google-login';
import ReactFacebookLogin from 'react-facebook-login';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface ISignInForData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn, signInGoogle, signInFacebook } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ISignInForData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required('Usuário obrigatório'),
          password: Yup.string().required('Senha obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/dashboard');

        await signIn({ email: data.email, password: data.password });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <img
          src="https://www.mirante.net.br/wp-content/uploads/2019/07/mirante-logo.png"
          alt="mirante-tecnologia"
        />
        <h3>Ola novamente</h3>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiUser} placeholder="Usuário" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <h3>Ou</h3>
        <GoogleLogin
          clientId={`${process.env.REACT_APP_GOOGLE_API_KEY}`}
          buttonText="Acessar com Google"
          render={(resnderProps) => (
            <Button
              icon={FcGoogle}
              onClick={resnderProps.onClick}
              variant="secondary"
            >
              Acessar com Google
            </Button>
          )}
          onSuccess={signInGoogle}
          onFailure={(err) => console.log(err)}
          cookiePolicy="single_host_origin"
        />
        <ReactFacebookLogin
          appId={`${process.env.REACT_APP_FACEBOOK_API_KEY}`}
          autoLoad
          textButton="Acessar com Facebook"
          fields="name,email,picture"
          callback={signInFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      </Content>
    </Container>
  );
};

export default SignIn;

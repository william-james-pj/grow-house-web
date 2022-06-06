import { FormEvent, useState } from 'react';

import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

import logoImg from '../../assets/Logo.svg';
import { Button } from '../../Components/Button';
import { InputText } from '../../Components/InputText';
import { Loading } from '../../Components/Loading';
import { emailValidator } from '../../utils/emailValidator';
import { passwordValidator } from '../../utils/passwordValidator';
import { confirmPasswordValidator } from '../../utils/confirmPasswordValidator';
import { InputState } from '../../config/types';

import * as S from '../Login/styles';

export function SignUp() {
  const { signin, errorMsg, clearErrorMsg } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState<InputState>(null);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState<InputState>(null);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [repeatPasswordValid, setRepeatPasswordValid] =
    useState<InputState>(null);
  const [loading, setLoading] = useState(false);

  const handleSingUp = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (!email.trim().length || !password.trim().length) return;

      if (
        emailValid === null ||
        emailValid === false ||
        passwordValid === null ||
        passwordValid === false ||
        repeatPasswordValid === null ||
        repeatPasswordValid === false
      )
        return;

      setLoading(true);
      await signin({ email, password });
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.Content>
        <S.ContentBox>
          <S.Title>Bem vindo</S.Title>
          <S.SubTitle>
            Você pode começar a usar o site após se inscrever.
          </S.SubTitle>
          <S.Form onSubmit={handleSingUp}>
            <InputText
              label="E-mail"
              placeholder="E-mail"
              onChangeText={setEmail}
              value={email}
              validator={emailValidator}
              errorText={'Por favor insira um endereço de e-mail válido'}
              setValidState={setEmailValid}
            />
            <InputText
              type="password"
              label="Senha"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
              validator={passwordValidator}
              errorText={'A senha deve ter pelo menos 6 caracteres'}
              setValidState={setPasswordValid}
            />
            <InputText
              type="password"
              label="Senha de confirmação"
              placeholder="Senha de confirmação"
              onChangeText={setRepeatPassword}
              value={repeatPassword}
              confirmPasswordValidator={confirmPasswordValidator}
              confirmPassword={password}
              errorText={'Senha e senha de confirmação devem ser iguais.'}
              setValidState={setRepeatPasswordValid}
            />

            {errorMsg !== '' ? <S.TextError>{errorMsg}</S.TextError> : null}

            <Button type="submit">Entrar</Button>
          </S.Form>

          <S.NavigationContainer>
            <S.NavigationText>Já tem uma conta?</S.NavigationText>
            <S.NavigationLink
              onClick={() => {
                clearErrorMsg();
                navigate('/login');
              }}
            >
              Entrar
            </S.NavigationLink>
          </S.NavigationContainer>
        </S.ContentBox>
      </S.Content>

      <S.ImageContainer>
        <S.Img src={logoImg} alt="Ilustração" />
      </S.ImageContainer>
    </S.Container>
  );
}

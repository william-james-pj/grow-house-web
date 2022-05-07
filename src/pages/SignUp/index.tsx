import { FormEvent, useState } from 'react';

import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

import logoImg from '../../assets/Logo.svg';
import { Button } from '../../Components/Button';
import { InputText } from '../../Components/InputText';
import { Loading } from '../../Components/Loading';
import { emailValidator } from '../../utils/emailValidator';
import { passwordValidator } from '../../utils/passwordValidator';

import * as S from '../Login/styles';
import { confirmPasswordValidator } from '../../utils/confirmPasswordValidator';

export function SignUp() {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSingUp = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (!email.trim().length || !password.trim().length) return;

      setLoading(true);
      await signin({ email, password });
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      console.log(error);
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
            />
            <InputText
              type="password"
              label="Senha"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
              validator={passwordValidator}
              errorText={'A senha deve ter pelo menos 6 caracteres'}
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
            />
            <Button type="submit">Entrar</Button>
          </S.Form>

          <S.NavigationContainer>
            <S.NavigationText>Já tem uma conta?</S.NavigationText>
            <S.NavigationLink onClick={() => navigate('/login')}>
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

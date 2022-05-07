import { FormEvent, useState } from 'react';
import * as S from './styles';

import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

import logoImg from '../../assets/Logo.svg';
import { Button } from '../../Components/Button';
import { InputText } from '../../Components/InputText';
import { Loading } from '../../Components/Loading';
import { emailValidator } from '../../utils/emailValidator';
import { passwordValidator } from '../../utils/passwordValidator';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (!email.trim().length || !password.trim().length) return;

      setLoading(true);
      await login(email, password);
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
          <S.Title>Bem vindo de volta</S.Title>
          <S.SubTitle>
            Você pode continuar de onde parou fazendo login.
          </S.SubTitle>
          <S.Form onSubmit={handleLogin}>
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
            <S.TextForgot>Esqueceu a senha?</S.TextForgot>
            <Button type="submit">Entrar</Button>
          </S.Form>

          <S.NavigationContainer>
            <S.NavigationText>Não tem uma conta?</S.NavigationText>
            <S.NavigationLink onClick={() => navigate('/signup')}>
              Inscrever-se
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

import * as S from './styles';

import { useNavigate } from 'react-router';

import logoImg from '../../assets/Logo.svg';
import { Button } from '../../Components/Button';

export function Login() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <S.ContentBox>
          <S.Title>Bem vindo de volta</S.Title>
          <S.SubTitle>
            Você pode continuar de onde parou fazendo login.
          </S.SubTitle>
          <S.Form onSubmit={() => {}}>
            <S.Label>E-mail</S.Label>
            <S.Input type="text" placeholder="E-mail" />
            <S.Label>Senha</S.Label>
            <S.Input type="text" placeholder="Senha" />
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

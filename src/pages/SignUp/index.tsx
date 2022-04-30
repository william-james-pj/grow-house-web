import * as S from '../Login/styles';

import { useNavigate } from 'react-router';

import logoImg from '../../assets/Logo.svg';
import { Button } from '../../Components/Button';

export function SignUp() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <S.ContentBox>
          <S.Title>Bem vindo</S.Title>
          <S.SubTitle>
            Você pode começar a usar o site após se inscrever.
          </S.SubTitle>
          <S.Form onSubmit={() => {}}>
            <S.Label>E-mail</S.Label>
            <S.Input type="text" placeholder="E-mail" />
            <S.Label>Senha</S.Label>
            <S.Input type="text" placeholder="Senha" />
            <S.Label>Repita a senha</S.Label>
            <S.Input type="text" placeholder="Repita a senha" />
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

'use client';
import { PageTitle } from '@/components/Header/PageTitle';
import styled from 'styled-components';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <Wrapper>
      <StyledForm>
        <PageTitle />
        <input type="text" placeholder="email/login" name="usernameOrEmail" />
        <input type="password" placeholder="password" name="passsword" />
        <StyledButton type="submit">Login</StyledButton>
        <RegisterLinkWrapper>
          You do not have an account?
          <StyledLink href="/login/register">register</StyledLink>
        </RegisterLinkWrapper>
      </StyledForm>
    </Wrapper>
  );
};
export default LoginPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 10px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  min-height: max-content;
  width: 90%;
  input {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.veryDarkGrey};
    :focus {
      outline: none;
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 40px 4%;
    width: 30%;
  }
`;
const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  margin: auto;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
`;
const RegisterLinkWrapper = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 20px auto 0 auto;
`;

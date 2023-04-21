'use client';
import { PageTitle } from '@/components/Header/PageTitle';
import styled from 'styled-components';
import Link from 'next/link';
import axios from 'axios';
import { FormEvent, useState } from 'react';

const URL_REGISTER = 'http://localhost:5050/register';

const RegisterPage = () => {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const resetInputs = () => {
    setConfirmPassword('');
    setPassword('');
    setUsername('');
    setError('');
    setEmail('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      email !== '' &&
      username !== '' &&
      password !== '' &&
      confirmPassword === password
    ) {
      try {
        const { data } = await axios.post(
          URL_REGISTER,
          {
            username: username,
            email: email,
            password: password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        resetInputs();
        setError(data.message);
      } catch (err: any) {
        console.log(err);
        setError(err.response.data.message);
      }
    } else {
      setError('Not valid');
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <PageTitle />
        <input
          type="text"
          placeholder="login"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="passsword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="passswordConfirm"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* <label>
          <input type="checkbox" />I agree.
        </label> */}
        {error !== '' ? <ErrorMessage>{error}</ErrorMessage> : null}
        <StyledButton type="submit">Register</StyledButton>
        <RegisterLinkWrapper>
          Already have an account?
          <StyledLink href="/login">login</StyledLink>
        </RegisterLinkWrapper>
      </StyledForm>
    </Wrapper>
  );
};
export default RegisterPage;

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

const ErrorMessage = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.white};
`;

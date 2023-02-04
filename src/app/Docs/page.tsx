'use client';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

const Docs = () => {
  return <Title>Docs</Title>;
};
export default Docs;

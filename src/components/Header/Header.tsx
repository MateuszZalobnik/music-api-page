import React from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';
import { PageTitle } from './PageTitle';
import Link from 'next/link';
export const Header: React.FC = () => {
  return (
    <Wrapper>
      <StyledLink href="/login">Login</StyledLink>
      <PageTitle />
      <Nav />
    </Wrapper>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  width: max-content;
  padding: 0 20px;
  margin-left: auto;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.s};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.grey};
  padding-top: 20px;
  line-height: 50px;
`;

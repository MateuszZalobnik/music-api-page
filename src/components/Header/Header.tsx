import React from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';
import { PageTitle } from './PageTitle';

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <PageTitle />
      <Nav />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.grey};
  padding-top: 20px;
  line-height: 50px;
`;

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`;

const PageTitle: React.FC = () => {
  return (
    <Wrapper>
      <Link href="/">MUSIC API</Link>
    </Wrapper>
  );
};

export default PageTitle;

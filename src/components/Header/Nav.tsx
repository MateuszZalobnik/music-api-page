import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

export const Nav: React.FC = () => {
  const param = usePathname();

  return (
    <Wrapper>
      <StyledLink href="/Docs" active={param === '/Docs' ? 'true' : 'false'}>
        Docs
      </StyledLink>
      <StyledLink
        href="/ForDJs"
        active={param === '/ForDJs' ? 'true' : 'false'}
      >
        ForDJs
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  line-height: 40px;
  padding: 0px 50px;
  font-size: ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
    flex-direction: row;
    justify-content: space-around;
  }
`;

interface LinkProps {
  active: string; // Warning If you want to write it to the DOM, pass a string instead: active="true" or active={value.toString()}.
}

const StyledLink = styled(Link)<LinkProps>`
  width: max-content;
  border-bottom: ${({ active, theme }) =>
    active === 'true' ? `4px solid ${theme.colors.primary}` : 'none'};
  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

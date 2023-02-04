'use client';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  margin: 5vh auto 0 auto;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 60%;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      A music API (Application Programming Interface) is a set of programming
      instructions and standards for accessing a web-based software application
      or web tool. In the context of music, a music API enables developers to
      access music-related data and interact with various music services and
      databases. This data include information such as artist information, album
      details, bpm and camelot.
    </Wrapper>
  );
};
export default Home;

'use client';
import { getUserData } from '@/AuthApi/getUserData';
import styled from 'styled-components';

const Home = () => {
  getUserData();

  return (
    <Wrapper>
      Welcome to our web app designed for developers and DJs alike! Our platform
      provides two modules to cater to the needs of both groups.
      <br />
      <br />
      <span>For developers,</span> we have a module that offers a comprehensive
      Music API documentation. With the help of this module, developers can
      easily integrate music-related functionality into their applications. Our
      API provides a range of features, including searching for music,
      retrieving information about artists, albums and more. Whether you are a
      beginner or an experienced developer, our API documentation is designed to
      be user-friendly and easy to understand.
      <br />
      <br />
      <span>For DJs,</span> we have a module that offers information about
      artists, BPM (beats per minute), Camelot, and other relevant information.
      This module is a comprehensive resource for DJs, providing them with the
      information they need to create seamless sets and keep their audiences
      entertained. Whether you are a beginner or a seasoned DJ, our
      information-packed module will help you stay on top of your game.
      <br />
      <br />
      With our web app, developers and DJs alike have access to the tools and
      information they need to succeed in their respective fields. Whether you
      are looking to build a music-related application or take your DJ skills to
      the next level, our platform has everything you need to make your vision a
      reality.
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.p`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 5vh auto 5vh auto;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary};
  }
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 60%;
  }
`;

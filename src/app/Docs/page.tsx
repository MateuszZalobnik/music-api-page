'use client';
import Endpoint from '@/components/Docs/Endpoint';
import Table from '@/components/Docs/Table';
import styled from 'styled-components';
import data from './data.json';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 5vh auto 5vh auto;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 60%;
  }
`;

const Content = styled.main`
  margin-top: 40px;
`;

const Docs = () => {
  return (
    <Wrapper>
      <Title>Docs</Title>
      <Content>
        <h2>Endpoints</h2>
        <Endpoint endpoint={data.root.endpoint} />
        <Endpoint
          request={data.allMusic.request}
          endpoint={data.allMusic.endpoint}
          description={data.allMusic.description}
        />
        <Endpoint
          request={data.musicById.request}
          endpoint={data.musicById.endpoint}
          description={data.musicById.description}
        />
        <Endpoint
          request={data.musicWithParams.request}
          endpoint={data.musicWithParams.endpoint}
          description={data.musicWithParams.description}
        />
        <Endpoint
          endpoint={data.musicMixParams.endpoint}
          description={data.musicMixParams.description}
        />
        <Table />
      </Content>
    </Wrapper>
  );
};
export default Docs;

'use client';
import useSWR from 'swr';
import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';
import MusicItem from '@/components/molecules/MusicItem/MusicItem';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const url = 'https://musicapi-fpzm.onrender.com/music';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: auto;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 60%;
  }
`;

const MusicList = styled.div``;

export default function ForDJs() {
  const { data, error, isLoading } = useSWR(url, fetcher);

  console.log(data);
  useEffect(() => {}, [data]);

  return (
    <Wrapper>
      <Title>ForDJs</Title>
      <MusicList>
        {data
          ? data.map(
              (item: {
                _id: string;
                title: string;
                album: string;
                artist: string[];
                bpm: number;
                camelot: string;
              }) => {
                return <MusicItem key={item._id} data={item} />;
              }
            )
          : null}
      </MusicList>
    </Wrapper>
  );
}

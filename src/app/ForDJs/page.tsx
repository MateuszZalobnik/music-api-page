'use client';
import useSWR from 'swr';
import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';
import { MusicItem } from '@/components/ForDJs/MusicItem';
import { FilterBar } from '@/components/ForDJs/FilterBar/FilterBar';
import { useSearchParams } from 'next/navigation';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const URL = 'https://musicapi-fpzm.onrender.com/music';

export default function ForDJs() {
  const searchParams = useSearchParams();
  const bpm_gt = searchParams.get('bpm_gt');
  const bpm_lt = searchParams.get('bpm_lt');
  const searchPhrase = searchParams.get('title');
  let currentUrl = setApiUrl(bpm_gt, bpm_lt, searchPhrase);
  const { data, error, isLoading } = useSWR(currentUrl, fetcher);

  useEffect(() => {}, [data]);

  return (
    <Wrapper>
      <Title>ForDJs</Title>
      <FilterBar />
      <InfoLabel>
        <InfoWrapper>
          <div>bpm</div>
          <div>camelot</div>
        </InfoWrapper>
      </InfoLabel>
      <MusicList>
        {data ? (
          data.map(
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
        ) : (
          <LoadingSpinner loading={true} />
        )}
      </MusicList>
    </Wrapper>
  );
}

function setApiUrl(
  bpm_gt: string | null,
  bpm_lt: string | null,
  searchPhrase: string | null
) {
  let currentUrl = URL + '?';
  bpm_lt && bpm_lt != ''
    ? (currentUrl = `${currentUrl}bpm_lt=${bpm_lt}&`)
    : null;
  bpm_gt && bpm_gt != ''
    ? (currentUrl = `${currentUrl}bpm_gt=${bpm_gt}&`)
    : null;
  searchPhrase && searchPhrase != ''
    ? (currentUrl = `${currentUrl}title=${searchPhrase}&`)
    : null;
  return currentUrl;
}

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
    width: 80%;
  }
  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 60%;
  }
`;

const InfoLabel = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 6fr 2fr;
`;

const InfoWrapper = styled.div`
  padding: 15px 0px 15px 0px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  justify-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  grid-column-start: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const MusicList = styled.div``;

'use client';
import useSWR from 'swr';
import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';
import MusicItem from '@/components/molecules/MusicItem/MusicItem';
import FilterBar from '@/components/molecules/FilterBar/FilterBar';
import { useSearchParams } from 'next/navigation';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const URL = 'https://musicapi-fpzm.onrender.com/music';

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

const MusicList = styled.div``;

export default function ForDJs() {
  const searchParams = useSearchParams();
  const bpm_gt = searchParams.get('bpm_gt');
  const bpm_lt = searchParams.get('bpm_lt');
  let currentUrl = setApiUrl(bpm_gt, bpm_lt);

  console.log(currentUrl);
  const { data, error, isLoading } = useSWR(currentUrl, fetcher);
  useEffect(() => {
    console.log(data);
    console.log(bpm_gt);
  }, [data]);

  return (
    <Wrapper>
      <Title>ForDJs</Title>
      <FilterBar />
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

function setApiUrl(bpm_gt: string | null, bpm_lt: string | null) {
  let currentUrl = URL + '?';
  if (bpm_lt && bpm_gt && bpm_gt != '' && bpm_lt != '')
    currentUrl = `${currentUrl}bpm_gt=${bpm_gt}&bpm_lt=${bpm_lt}`;
  else if (bpm_gt && bpm_gt != '') currentUrl = `${currentUrl}bpm_gt=${bpm_gt}`;
  else if (bpm_lt && bpm_lt != '') currentUrl = `${currentUrl}bpm_lt=${bpm_lt}`;
  return currentUrl;
}

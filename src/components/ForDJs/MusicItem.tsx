import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  data: {
    title: string;
    album: string;
    artist: string[];
    bpm: number;
    camelot: string;
  };
}

export const MusicItem: React.FC<Props> = ({
  data: { title, album, artist, bpm, camelot },
}) => {
  const [artistString, setArtistString] = useState(artist.join(', '));

  return (
    <Wrapper>
      <FirstWrapper>
        <Title>{title}</Title>
        <Artist>{artistString}</Artist>
      </FirstWrapper>
      <Item>{bpm ? bpm : '-'}</Item>
      <Item>{camelot ? camelot : '-'}</Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  margin-top: 20px;
  display: grid;
  grid-template-columns: 6fr 1fr 1fr;
  padding: 10px 0px 10px 20px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-left: 2px solid ${({ theme }) => theme.colors.grey};
`;

const Title = styled.div`
  display: flex;
`;

const Artist = styled.div`
  margin-top: 10px;
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

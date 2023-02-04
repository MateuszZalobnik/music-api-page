'use client';
import styled from 'styled-components';

const Wrapper = styled.div``;

interface Props {
  data: {
    title: string;
    album: string;
    artist: string[];
    bpm: number;
    camelot: string;
  };
}

const MusicItem: React.FC<Props> = ({
  data: { title, album, artist, bpm },
}) => {
  return <Wrapper>{title}</Wrapper>;
};
export default MusicItem;

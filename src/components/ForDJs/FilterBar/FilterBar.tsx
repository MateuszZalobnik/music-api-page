import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import CamelotDropdown from './CamelotWrapper';

export const FilterBar = () => {
  const searchParams = useSearchParams();
  const [openCamelot, setOpenCamelot] = useState(false);
  // const initialCamelot = searchParams.get('camelot')
  //   ? String(searchParams.get('camelot')).split(',')
  //   : null;
  // const [camelot, setCamelot] = useState<string[] | null>(initialCamelot);
  const [minBpm, setMinBpm] = useState(searchParams.get('bpm_gt'));
  const [maxBpm, setMaxBpm] = useState(searchParams.get('bpm_lt'));
  const [searchPhrase, setSearchPhrase] = useState(searchParams.get('title'));
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let url = '/ForDJs?';
    minBpm && minBpm != '' ? (url = `${url}bpm_gt=${minBpm}&`) : null;
    maxBpm && maxBpm != '' ? (url = `${url}bpm_lt=${maxBpm}&`) : null;
    searchPhrase && searchPhrase != ''
      ? (url = `${url}title=${searchPhrase}`)
      : null;
    router.push(url);
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <BpmWrapper>
        bpm:
        <label>
          min
          <input
            type="number"
            value={minBpm ? String(minBpm) : ''}
            onChange={(e) => setMinBpm(e.target.value)}
          />
        </label>
        <label>
          max
          <input
            type="number"
            value={maxBpm ? String(maxBpm) : ''}
            onChange={(e) => setMaxBpm(e.target.value)}
          />
        </label>
      </BpmWrapper>
      <div>
        <SearchBar
          type="text"
          placeholder="Search"
          value={searchPhrase ? String(searchPhrase) : ''}
          onChange={(e) => setSearchPhrase(e.target.value)}
        />
        {/* <CamelotWrapper>
          <CamelotButton onClick={() => setOpenCamelot((prev) => !prev)}>
            <span>Camelot</span>
            &#9660;
          </CamelotButton>
          {openCamelot && <CamelotDropdown />}
        </CamelotWrapper> */}
      </div>
      <div></div>
      <SumbitWrapper>
        <SumbitBtn type="submit" value="Szukaj" />
      </SumbitWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  ${({ theme }) => theme.mq.tablet} {
    padding: 10px 0px 10px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const BpmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    margin-top: 5px;
    font-weight: ${({ theme }) => theme.fontWeight.thin};
    font-size: ${({ theme }) => theme.fontSize.s};
    display: flex;
    flex-direction: column;
    text-align: center;
    input {
      border: none;
      border-bottom: 2px solid ${({ theme }) => theme.colors.veryDarkGrey};
      text-align: center;
      margin: auto;
      display: flex;
      width: 70%;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.darkGrey};
      :focus {
        outline: none;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const SumbitWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SumbitBtn = styled.input`
  cursor: pointer;
  width: 60%;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: 10px 40px;
  height: max-content;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grey};
`;

const SearchBar = styled.input`
  display: flex;
  margin: 20px auto 0px auto;
  width: 80%;
  height: max-content;
  border: none;
  padding: 5px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
  color: ${({ theme }) => theme.colors.grey};
  :focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const CamelotButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  height: max-content;
  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
  color: ${({ theme }) => theme.colors.grey};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: 5px;
  width: 80%;
  margin: 20px auto;
`;

const CamelotWrapper = styled.div`
  position: relative;
`;

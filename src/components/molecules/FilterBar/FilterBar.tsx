'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px 0px 10px 20px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
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
  width: 60%;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 10px;
  padding: 10px 40px;
  height: max-content;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grey};
`;

const FilterBar = () => {
  const [minBpm, setMinBpm] = useState('');
  const [maxBpm, setMaxBpm] = useState('');
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let url = '/ForDJs?';
    if (minBpm != '' && maxBpm != '') {
      url = `${url}bpm_gt=${minBpm}&bpm_lt=${maxBpm}`;
    } else if (minBpm != '') {
      url = `${url}bpm_gt=${minBpm}`;
    } else if (maxBpm != '') {
      url = `${url}bpm_lt=${maxBpm}`;
    }
    router.push(url);
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <BpmWrapper>
        bpm:
        <label>
          min
          <input type="number" onChange={(e) => setMinBpm(e.target.value)} />
        </label>
        <label>
          max
          <input type="number" onChange={(e) => setMaxBpm(e.target.value)} />
        </label>
      </BpmWrapper>
      <div></div>
      <div></div>
      <SumbitWrapper>
        <SumbitBtn type="submit" value="Szukaj" />
      </SumbitWrapper>
    </Wrapper>
  );
};
export default FilterBar;

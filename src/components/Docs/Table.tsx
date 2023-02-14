import styled from 'styled-components';

export const Table = () => {
  return (
    <Wrapper>
      <thead>
        <tr>
          <th>PARAM</th>
          <th>TYPE</th>
          <th>DETAILS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>bpm_lt</td>
          <td>number</td>
          <td>returns all music with bpm lower than value</td>
        </tr>
        <tr>
          <td>bpm_gt</td>
          <td>number</td>
          <td>returns all music with bpm greater than value</td>
        </tr>
        <tr>
          <td>camelot</td>
          <td>string</td>
          <td>
            returns all music with supplied camelot, letter case does not matter
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>
            returns all music whitch include supplied phrase in title, letter
            case does not matter
          </td>
        </tr>
      </tbody>
    </Wrapper>
  );
};

const Wrapper = styled.table`
  font-size: ${({ theme }) => theme.fontSize.xs};
  border-collapse: collapse;
  table,
  td,
  th {
    border: 2px solid ${({ theme }) => theme.colors.grey};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.s};
    table,
    td,
    th {
      padding: 10px;
    }
  }
`;

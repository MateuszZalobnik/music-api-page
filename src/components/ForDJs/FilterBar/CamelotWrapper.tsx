import { useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

const CAMELOTS = [
  '1A',
  '2A',
  '3A',
  '4A',
  '5A',
  '6A',
  '7A',
  '8A',
  '9A',
  '10A',
  '11A',
  '12A',
  '1B',
  '2B',
  '3B',
  '4B',
  '5B',
  '6B',
  '7B',
  '8B',
  '9B',
  '10B',
  '11B',
  '12B',
];

const Wrapper = styled.div`
  height: 200px;
  overflow-y: scroll;
  position: absolute;
  top: 27px;
  left: 10%;
  margin: auto;
  width: 80%;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
  ul {
    list-style-type: none;
    li {
      label {
        font-size: ${({ theme }) => theme.fontSize.xs};
        display: flex;
        padding: 5px;
        width: 100%;
        justify-content: space-between;
        ${({ theme }) => theme.mq.tablet} {
          font-size: ${({ theme }) => theme.fontSize.s};
        }
      }
    }
  }
`;

export const CamelotDropdown: React.FC<{
  camelot: string[];
  setCamelot: Dispatch<SetStateAction<string[]>>;
}> = ({ camelot, setCamelot }) => {
  const handleChange = (event: any) => {
    if (event.target.checked) {
      setCamelot([...camelot, event.target.value]);
    } else {
      setCamelot(camelot.filter((id) => id !== event.target.value));
    }
    console.log(camelot);
    
  };

  return (
    <Wrapper>
      <ul>
        {CAMELOTS.map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                value={item}
                checked={camelot.includes(item)}
                onChange={handleChange}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

// export const Checkbox = ({ option, selectedOptions, setSelectedOptions }) => {
//   const handleChange = (event) => {
//     if (event.target.checked) {
//       setSelectedOptions([...selectedOptions, option.id]);
//     } else {
//       setSelectedOptions(selectedOptions.filter((id) => id !== option.id));
//     }
//   };

//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={selectedOptions.includes(option.id)}
//         onChange={handleChange}
//       />
//       {option.label}
//     </label>
//   );
// }

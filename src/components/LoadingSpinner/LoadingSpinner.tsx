import ScaleLoader from 'react-spinners/ScaleLoader';
import styled from 'styled-components';

export const LoadingSpinner: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <Wrapper>
      <ScaleLoader
        width={10}
        height={100}
        color="#BD165C"
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

import styled from 'styled-components';

export const Endpoint: React.FC<{
  request?: string | null;
  endpoint: string;
  description?: string | null;
}> = ({ request, endpoint, description }) => {
  function handleCopy(value: string) {
    navigator.clipboard.writeText(value);
  }
  return (
    <Wrapper>
      {request && <Request>{request}</Request>}
      <EndpointWrapper>
        {endpoint}
        <Button onClick={() => handleCopy(endpoint)}>Copy</Button>
      </EndpointWrapper>
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 30px;
`;
const EndpointWrapper = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
  ${({ theme }) => theme.mq.tablet} {
    overflow-x: hidden;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
const Description = styled.div`
  margin: 5px 0px 0px 20px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Request = styled.h3`
  display: flex;
  width: max-content;
  max-width: 100%;
  padding: 5px 5px;
  border-radius: 10px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.s};
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
  color: ${({ theme }) => theme.colors.primary};
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

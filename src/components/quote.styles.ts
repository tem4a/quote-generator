import styled from 'styled-components';

export const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  & > span {
    margin-bottom: 24px;
    font-size: 11px;
    line-height: 15px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 3.45714px;
    color: ${(props) => props.theme.colors.primary2};
  }
`;

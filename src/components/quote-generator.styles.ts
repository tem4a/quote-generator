import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 40px 24px;
  background-color: ${(props) => props.theme.colors.neutral.darkGrayBlue};
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  border-radius: 10px;

  p {
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.257143px;
    color: ${(props) => props.theme.colors.primary1};
  }
`;

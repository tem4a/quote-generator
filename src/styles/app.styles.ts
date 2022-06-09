import styled from 'styled-components';

export const AppContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 16px;
  background-color: ${(props) => props.theme.colors.neutral.darkBlue};
`;

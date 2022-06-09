import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  & > span {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.primary1};
  }
`;

const DividerIcon = styled.div`
  display: grid;
  grid-template-columns: 6px 6px;
  grid-gap: 8px;
  margin: 0 16px;

  & > span {
    width: 6px;
    height: 16px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.primary1};
  }
`;

const Divider = () => {
  return (
    <Wrapper>
      <span />
      <DividerIcon>
        <span />
        <span />
      </DividerIcon>
      <span />
    </Wrapper>
  );
};

export default Divider;

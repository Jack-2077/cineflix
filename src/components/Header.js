import React from 'react';
import styled from 'styled-components/macro';

const StyledHeader = styled.header`
  h1 {
    font-size: 2.66rem;
    color: rgb(60, 64, 67);
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>CineFlix</h1>
    </StyledHeader>
  );
}

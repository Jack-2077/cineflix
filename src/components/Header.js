import React from 'react';
import styled from 'styled-components/macro';
import { SearchBar } from './';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  gap: calc(2.66rem + 20vw);
  align-items: center;
  h1 {
    font-size: 2.66rem;
    color: #ffff;
  }

  background-color: #121212;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>CineFlix</h1>
      <SearchBar />
    </StyledHeader>
  );
}

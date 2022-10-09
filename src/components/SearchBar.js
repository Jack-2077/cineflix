import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';

const StyledSearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;

  svg {
    position: absolute;
    top: 20px;
    left: 25px;
    color: #ffff;
  }
  .accessibility-text {
    position: absolute;
    width: 0;
    overflow: hidden;
    opacity: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    display: block;
    margin-bottom: 10px;
    color: #0d0c22;
  }

  input {
    font-size: 1em;
    padding: 28px 45px 28px 55px;
    border: 1px solid transparent;
    border-radius: 50px;
    line-height: 28px;
    width: 100%;
    height: 40px;
    outline: none;
    background-color: #1f1f1f;
    color: #ffff;
    appearance: none;
  }
`;

export default function SearchBar() {
  return (
    <StyledSearchWrapper>
      <SearchIcon />
      <label htmlFor='search' className='accessibility-text'>
        Search
      </label>
      <input type='search' placeholder='Type title here' />
    </StyledSearchWrapper>
  );
}

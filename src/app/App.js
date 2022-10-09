import styled from 'styled-components/macro';
import debounce from 'lodash.debounce';
import GlobalStyles from './GlobalStyles';
import { SearchBar, MovieCard } from '../components';
import { useMemo } from 'react';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  gap: calc(2.66rem + 20vw);
  align-items: center;
  background-color: #121212;

  h1 {
    font-size: 2.66rem;
    color: #ffff;
  }
`;

function App() {
  const movies = [];

  const inputChangeHandler = (e) => {
    const title = e.target.value;
    if (title) {
      console.log(e.target.value);
    }
  };

  const debouncedInputChangeHandler = useMemo(
    () => debounce(inputChangeHandler, 300),
    []
  );

  return (
    <>
      <GlobalStyles />
      <StyledHeader>
        <h1>CineFlix</h1>
        <SearchBar handleInputChange={debouncedInputChangeHandler} />
      </StyledHeader>
      <MovieCard movies={movies} />
    </>
  );
}

export default App;

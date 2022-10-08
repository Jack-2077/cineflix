import GlobalStyles from './GlobalStyles';
import { Header, SearchBar } from '../components';
import styled from 'styled-components';

const StyledContainer = styled.section`
  padding: 0.5rem 0.85rem;
  width: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <Header />
        <SearchBar />
      </StyledContainer>
    </>
  );
}

export default App;

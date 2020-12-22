import React from 'react';
import { Container } from '@material-ui/core';
import NavBar from 'components/molecules/NavBar/NavBar';
import WikiSearchBar from 'components/organisms/WikiSearchBar/WikiSearchBar';
import Results from 'components/organisms/Results/Results';

const Home = () => (
  <>
    <NavBar />
    <Container maxWidth="xl">
      <WikiSearchBar />
      <Results />
    </Container>
  </>
);

export default Home;

import {StyledSection,
    StyledLink,
    SectionTitle,
    List,
    ListItem} from './MovieList.styled.jsx';

const MovieList = ({ trendingMovies }) => {
    return (
      <StyledSection>
        <SectionTitle>Trending today</SectionTitle>
  
        <List>
          {trendingMovies.map(trendingMovie => (
            <ListItem key={trendingMovie.id}>
              <StyledLink to={`/movies/${trendingMovie.id}`}>
                {trendingMovie.title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </StyledSection>
    );
  };

  export default MovieList;
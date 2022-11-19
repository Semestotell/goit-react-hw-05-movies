import { SearchMovie } from 'components/services/api';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import {
  Form,
  Input,
  Item,
  Link,
  List,
  PageWrapper,
  SearchButton,
  Wrapper,
} from './MoviesPage.styled';
import { toast } from 'react-toastify'

export default function MoviesPage() {
  const [movies, setMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) {
      return
    }
    if (query === '') {
      toast.error('Please enter the name of the movie!')
      return 
    }
    
    async function GetMovies() {
      try {
        const response = await SearchMovie(query);
        setMovies(response);
        if(response.length === 0 ) {
          toast.error(`Sorry, but we can't fond "${query}"`)
        }
        
      } catch (error) {
        toast.error('Nothing are wrong! Not fething movies!')
      }
    }
    GetMovies();
  }, [query]);
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value.trim() });
  };

  return (
    <PageWrapper>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Movie title" />
        <SearchButton type="submit">Search</SearchButton>
      </Form>

      {movies && (
        <Wrapper>
          <List>
            {movies.map(movie => (
              <Item key={movie.id}>
                <Link to={`${movie.id}`}>{movie.title}</Link>
              </Item>
            ))}
          </List>
        </Wrapper>
      )}
      <Outlet />
    </PageWrapper>
    
  );
}

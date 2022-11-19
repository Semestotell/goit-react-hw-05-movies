import { GetMovieDetails } from 'components/services/api';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Context,
  FilmPage,
  Genres,
  Image,
  SecondTitle,
  Title,
  Wrapper,
  Link,
  LinkContainer,
} from './MovieDetailsPage.styled';
import { toast } from 'react-toastify';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);
  const [pages, setPages] = useState(-1);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await GetMovieDetails(movieId);
        setItem(response);
      } catch (error) {
        toast.error('Nothing are wrong! Not fething trending movies!');
      }
    }
    fetchMovie();
  }, [movieId]);
  console.log(item);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(pages);
    setPages(-1);
  };
  const pageCounter = () => {
    setPages(prevPages => prevPages - 1);
  };

  return (
    <>
      {item && (
        <Wrapper>
          <Button onClick={goBack}>Go back</Button>
          <FilmPage>
            <Image
              src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}
              alt={item.title}
            />

            <div>
              <Title>
                {item.title}({item.release_date.slice(0, 4)})
              </Title>
              <Context>User Score: {item.vote_average * 10}%</Context>
              <SecondTitle>Overview</SecondTitle>
              <p>{item.overview}</p>
              <SecondTitle>Genres</SecondTitle>
              {item.genres.map(genre => (
                <Genres key={genre.id}>{genre.name}</Genres>
              ))}
            </div>
          </FilmPage>
          <LinkContainer>
            <Link to={'cast'} onClick={pageCounter}>
              Cast
            </Link>
            <Link to={'reviews'} onClick={pageCounter}>
              Reviews
            </Link>
          </LinkContainer>
          <Outlet />
        </Wrapper>
      )}
    </>
  );
}

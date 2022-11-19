import { GetCast } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Character, EmptyPhoto, List, Name, Photo } from './Cast.styled';
import { toast } from 'react-toastify';
export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await GetCast(movieId);
        setActors(response);
      } catch (error) {
        toast.error('Fething Error!')
      }
    }
    fetchCast();
  }, [movieId]);

  console.log(actors);

  return (
    <>
      {actors && (
        <div>
          <List>
            {actors.map((actor, index) => (
              <Card key={index}>
                {actor.profile_path ? (
                  <Photo
                    src={
                      'https://image.tmdb.org/t/p/w500/' + actor.profile_path
                    }
                    alt={actor.name}
                  />
                ) : (
                  <EmptyPhoto>Not found!</EmptyPhoto>
                )}
                <Character>{actor.character}</Character>
                <Name>{actor.name}</Name>
              </Card>
            ))}
          </List>
        </div>
      )}
    </>
  );
};

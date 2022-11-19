import { GetTrendingMovies } from 'components/services/api';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Item, List, Wrapper, Link } from './HomePage.styled';
import { toast } from 'react-toastify';
export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const responseData = await GetTrendingMovies();
        setData(responseData);
      } catch (error) {
        toast.error('Nothing are wrong!')
      }
    }
    fetchMovies();
  }, []);

  return (
    <Wrapper>
      <List>
        {data.map(item => (
          <Item key={item.id}>
            <Link to={`movies/${item.id}/`}>{item.title}</Link>
          </Item>
        ))}
      </List>
      <Outlet />
    </Wrapper>
  );
}

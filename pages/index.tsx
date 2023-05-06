import type { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useMovieList from '@/hooks/useMovieList';

const Home: NextPage = () => {

  const { data: movies = [] } = useMovieList();

  return (
    <>
      <Navbar />
      <Billboard />
      
      <div className='pb-40'>
        <MovieList title="Trending now" data={movies} />
      </div>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Home;

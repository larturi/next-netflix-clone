import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head'
import { getSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import InfoModal from '../components/InfoModal';
import useInfoModalStore from '@/hooks/useInfoModal';

const Home: NextPage = () => {
  const { data: series = [] } = useMovieList('serie');
  const { data: movies = [] } = useMovieList('movie');
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <InfoModal 
        visible={isOpen}
        onClose={closeModal}
      />
      <Navbar />
      <Billboard />
      
      <div className='pb-40'>
        <MovieList title="Series" data={series} />
        <MovieList title="Movies" data={movies} />
        <MovieList title="Favorites" data={favorites} />
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

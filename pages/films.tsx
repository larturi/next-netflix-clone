import type { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import useMovieList from '@/hooks/useMovieList';
import FilteredListContent from '@/components/FilteredListContent';

const Films: NextPage = () => {
  const { data: movies = [] } = useMovieList('movie');
  return (
    <FilteredListContent 
      contentList={movies}
      title="Films"
    />
  )
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

export default Films;

import type { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import useMovieList from '@/hooks/useMovieList';
import FilteredListContent from '@/components/FilteredListContent';

const Series: NextPage = () => {
  const { data: series = [] } = useMovieList('serie');
  return (
    <FilteredListContent 
        contentList={series}
        title='Series'
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

export default Series;

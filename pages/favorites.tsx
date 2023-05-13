import type { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import FilteredListContent from '@/components/FilteredListContent';
import useFavorites from '@/hooks/useFavorites';

const Favorites: NextPage = () => {
  const { data: favorites = [] } = useFavorites();

  return (
    <FilteredListContent 
        contentList={favorites}
        title='Favorites'
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

export default Favorites;

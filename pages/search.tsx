import type { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import FilteredListContent from '@/components/FilteredListContent';
import useSearchList from '@/hooks/useSearchList';

type Props = {
  filter: string;
};

const Search: NextPage<Props> = ({ filter }) => {
  const { data: results = [] } = useSearchList(filter);
  return (
    <FilteredListContent 
        contentList={results}
        title='Search Results'
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

  const { filter } = context.query;

  return {
    props: {
      filter: filter || '',
    },
  };
}

export default Search;

import type { NextPage, NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';
import useCurrentUser from '../hooks/useCurrentUser';

const Home: NextPage = () => {
  const { data: user } = useCurrentUser();
  return (
    <>
      <h1 className="text-2xl text-green-500">Hola</h1>
      <p>Loged in as: {user?.name}</p>
      <button onClick={() => signOut()}>SignOut</button>
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

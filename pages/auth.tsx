import { useCallback, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import axios from 'axios';
import Input from '../components/Input';

const Auth = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login',
    );
  }, []);

  const login = useCallback(async () => {
    if (email === '' || password === '') {
      console.log('Validation error');
      return;
    }

    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles',
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    if (name === '' || email === '' || password === '') {
      console.log('Validation error');
      return;
    }

    try {
      await axios.post('/api/register', {
        name,
        email,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, password, name, login]);

  return (
    <>
      <Head>
        <title>Netflix Clone: Login</title>
      </Head>

      <div
        className="
        relative 
        h-full 
        w-full 
        bg-[url('/images/hero.jpg')]
        bg-no-repeat
        bg-center
        bg-fixed
        bg-cover
      "
      >
        <div
          className="
        bg-black
        w-full
        h-full
        lg:bg-opacity-50
      "
        >
          <nav className="px-12 py-5">
            <img src="/images/logo.png" alt="logo" className="h-12" />
          </nav>
          <div className="flex justify-center">
            <div
              className="
              bg-black 
              bg-opacity-70 
              px-16
              py-16 
              self-center 
              mt-2 
              lg:w-2/5
              lg:max-w-md
              rounded-md
              w-full
            "
            >
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant === 'login' ? 'Sign in' : 'Register'}
              </h2>
              <div className="flex flex-col gap-4">
                {variant === 'register' && (
                  <Input
                    id="name"
                    type="text"
                    label="Username"
                    value={name}
                    onChange={(ev: any) => setName(ev.target.value)}
                  />
                )}
                <Input
                  id="email"
                  type="email"
                  label="Email address or phone number"
                  value={email}
                  onChange={(ev: any) => setEmail(ev.target.value)}
                />
                <Input
                  type="password"
                  id="password"
                  label="Password"
                  value={password}
                  onChange={(ev: any) => setPassword(ev.target.value)}
                />
              </div>
              <button
                onClick={variant === 'login' ? login : register}
                className="
                bg-red-600 
                  py-3 
                  text-white 
                  rounded-md 
                  w-full 
                  mt-10 
                  hover:bg-red-700 
                  transition
                "
              >
                {variant === 'login' ? 'Login' : 'Sign up'}
              </button>
              <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                <div
                  onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                  className="
                  w-10 
                  h-10 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  cursor-pointer 
                  hover:opacity-80 
                  transition
                bg-white
                "
                >
                  <FcGoogle size={32} />
                </div>
                <div
                  onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                  className="
                  w-10 
                  h-10 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  cursor-pointer 
                  hover:opacity-80 
                  transition 
                  border-[2px] 
                  border-white
                "
                >
                  <FaGithub size={32} />
                </div>
              </div>
              <p className="text-neutral-500 mt-12 text-center">
                {variant === 'login'
                  ? 'First time using?'
                  : 'Already have an account?'}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {variant === 'login' ? 'Create an account' : 'Login'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;

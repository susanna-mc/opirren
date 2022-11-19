import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LoginResponseBody } from './api/login';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function loginHandler() {
    const loginResponse = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: username.toLowerCase(),
        password,
      }),
    });
    const loginResponseBody = (await loginResponse.json()) as LoginResponseBody;

    if ('errors' in loginResponseBody) {
      setErrors(loginResponse.errors);
      return console.log(loginResponse.errors);
    }
    await router.push('/admin');
  }
  return (
    <>
      <Head>
        <title> Log In </title>
        <meta name="description" content="User Log in" />
      </Head>
      Log in
      {errors.map((error) => {
        return <p key={error.message}>ERROR: [error.message]</p>;
      })}
      <label>
        Username
        <input
          value={username}
          onChange={(event) => {
            setUsername(event.currentTarget.value.toLowerCase());
          }}
        />
      </label>
      <label>
        {' '}
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.currentTarget.value);
          }}
        />
      </label>
      <button
        onClick={async () => {
          await loginHandler();
        }}
      >
        {' '}
        log in
      </button>
    </>
  );
}

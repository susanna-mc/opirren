import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { getUserByUsername, User } from '../database/users';

type Props = {
  user?: User;
};

export default function UserProfile(props: Props) {
  if (!props.user) {
    return (
      <div>
        <Head>
          <title> User not found </title>
          <meta name="description" content="User not found" />
        </Head>
        <h2> 404 User Not Found </h2>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title> Personal Profile</title>
        <meta name="description" content="Biography of User" />
      </Head>
      id: {props.user.id} username: {props.user.username}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const username = context.query.username as string;

  const user = await getUserByUsername(username.toLowerCase());

  if (!user) {
    console.log("user doesn't exist");
    // context.res.statusCode = 404;
    // return {
    //   props: {
    //     error: 'User not found',
    //   },
    // };
    return {
      props: {},
    };
  }

  return {
    props: { user: user },
  };
}

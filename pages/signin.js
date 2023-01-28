import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/client";
import TailLoginForm from "../components/TailLoginForm";
import TailLogout from "../components/TailLogout";

const signin = () => {
  const [session] = useSession();
  return (
    <>
      <Head>
        <title>Login </title>
        <meta name="description" content="Login with email or social media" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session ? <TailLoginForm /> : <TailLogout />}
    </>
  );
};

export default signin;

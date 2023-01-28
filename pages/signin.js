import React, { useEffect } from "react";
import Head from "next/head";
import { useSession } from "next-auth/client";
import TailLoginForm from "../components/TailLoginForm";
import TailLogout from "../components/TailLogout";
import { useRouter } from "next/router";

const signin = () => {
  const [session] = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

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

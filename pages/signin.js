import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginForm from "../components/LoginForm";
import { signIn, signOut, useSession } from "next-auth/client";

const signin = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Next Auth</title>
        <meta name="description" content="Learning Next auth using next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="login-container">
          <LoginForm />
          <Link href="/api/auth/signin">
            <a
              class="signin-btn"
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              Sign In with GitHub
            </a>
          </Link>
          <Link href="/api/auth/signin">
            <a
              class="signin-btn"
              onClick={(e) => {
                e.preventDefault();
                signIn("google");
              }}
            >
              Sign In with Google
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default signin;

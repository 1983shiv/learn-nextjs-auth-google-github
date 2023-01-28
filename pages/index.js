import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Next Auth</title>
        <meta name="description" content="Learning Next auth using next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {session ? `${session.user.name}, ` : ""}Welcome to{" "}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>
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
}

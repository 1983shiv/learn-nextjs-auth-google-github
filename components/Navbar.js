import Link from "next/link";
import { signOut, useSession } from "next-auth/client";

function Navbar() {
  const [session, loading] = useSession();
  return (
    <nav className="header">
      <h1 className="logo">
        <a href=".">NextAuth</a>
      </h1>
      <ul className={`main-nav ${!session && loading ? "loading" : "loaded"}`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {session && (
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
        )}
        <li>
          <Link href="/stories">
            <a>Stories</a>
          </Link>
        </li>
        {!loading && !session && (
          <li>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li className="flex justify-center items-center">
            <img
              src={session?.user?.image}
              alt={session?.user?.name}
              width={35}
              height={35}
              className="rounded-lg mr-2 my-auto"
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

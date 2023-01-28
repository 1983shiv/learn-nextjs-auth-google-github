import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/client";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const TailLogout = () => {
  const [session] = useSession();

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="my-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {session ? `${session.user.name}, ` : ""}Welcome
          </h2>
          <Link href="/api/auth/signOut">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
                router.push("/");
              }}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign Out
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TailLogout;

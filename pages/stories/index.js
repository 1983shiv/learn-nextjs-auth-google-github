import React from "react";
import { getSession, useSession } from "next-auth/client";

const index = ({ data }) => {
  //   const [session] = useSession();
  return <div>this is stories - {data}</div>;
};

export default index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${process.env.BASE_URL}/stories`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: "List of 100 personalized blogs",
      session,
    },
  };
}

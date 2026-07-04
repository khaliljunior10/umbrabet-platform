import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>UmbraBet Platform</title>
        <meta name="description" content="UmbraBet Betting Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to UmbraBet Platform</h1>
        <p>Your premier betting platform</p>
      </main>
    </>
  );
};

export default Home;
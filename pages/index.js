import React from 'react';
import Layout from '../components/layout/layout';

import Head from 'next/head';
import Notes from '../components/nav/Notes';




export default function Home() {
  return (
    <>
      <Head>
        <title>Ho.re.ca.staff</title>
        <link rel="icon" href="../images/" />
      </Head>
      <Layout>
          <Notes />
          <main>
          </main>
      </Layout>
    </>
  )
}

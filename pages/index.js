import React from 'react';
import Layout from '../components/layout/layout';
import Carousel from '../components/carousel/carousel.js'

import Head from 'next/head';




export default function Home() {
  return (
    <>
      <Head>
        <title>Ho.re.ca.staff</title>
        <link rel="icon" href="../images/" />
      </Head>
      <Layout>
        <Carousel />
      </Layout>
    </>
  )
}

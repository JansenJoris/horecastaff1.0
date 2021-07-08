import React from 'react';
import { connectToDatabase } from '../util/mangodbHorecastaff'

import Layout from '../components/layout/layout';
import Carousel from '../components/carousel/carousel.js'


import Head from 'next/head';

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const data = await db.collection('horecastaffCN'/* 'listingsAndReviews' */).find({}).limit(5).toArray()

  //converte data from MongoDB to readable Javascript.
  const vacatures = JSON.parse(JSON.stringify(data));

  //Just filter the fields that you need from de DB
  const filtered = vacatures.map(vacature => {
    //const price = JSON.parse(JSON.stringify(vacature.price))
    return { //props
      _id: vacature._id,
      name: vacature.name,
      image: vacature.image.picture_url,
      /* address: vacature.address,
      summary: vacature.summary,
      guests: vacature.accommodates,
      price: price.$numberDecimal, */
    }
  })
  return {
    props: { vacatures: filtered },
  }
}


export default function Home({ vacatures }) {
  console.log(vacatures);

  return (
    <>
      <Head>
        <title>HO.RE.CA.STAFF</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main>
        <Layout>
          <div class="h-150 bg-yellow-700 bg-opacity-30">
            <Carousel />
          </div>
          <div class='flex flex-row flex-wrap'>
            {
              vacatures && vacatures.map(vacature => (
                <div class='flex-auto w-1/4 rounded overflow-hidden shadow-lg m-2'>
                  <img class='w-full' src={vacature.image} />
                  <div class='px6  py-4'>
                    <div class='font-bold text-xl mb-2'>
                      {vacature.name}{/* (Up to{vacature.guests} guests) */}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </Layout>
      </main>
    </>
  )
}

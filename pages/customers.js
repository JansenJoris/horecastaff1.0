import { connectToDatabase } from '../util/mangodbHorecastaff'

import Layout from '../components/layout/layout';
import SlideShow from '../components/carousel/carousel.js'


import Head from 'next/head';



export default function Customers({ customers }) {
    console.log(customers)
    return (
        <>
            <Head>
                <title>HO.RE.CA.STAFF-customers</title>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <main>
                <Layout>
                    <div class='flex flex-row flex-wrap'>
                        {
                            customers.map((klant) => (
                                <div class='flex-auto w-1/5 rounded overflow-hidden shadow-lg m-2'>
                                    <div class='px6  py-4'>
                                        <img class='w-full h-full' src={klant.image} alt="Company image" />
                                        <div class='font-bold text-xl mb-2'>
                                            {klant.company}
                                        </div>
                                        <div class='font-bold text-xl mb-2'>
                                            {klant.street}
                                        </div>
                                    </div>
                                </div>))}
                    </div>
                </Layout>
            </main>
        </>
    )
}
export async function getServerSideProps(context) {
    const { db } = await connectToDatabase()

    const dataKlanten = await db.collection('klantenBestand').find({}).limit(100).toArray()

    //converte data from MongoDB to readable Javascript.
    const customers = JSON.parse(JSON.stringify(dataKlanten));

    //Just filter the fields that you need from de DB
    const filtered = customers.map(klant => {
        //const price = JSON.parse(JSON.stringify(vacature.price))
        return { //props
            _id: klant._id,
            company: klant.company,
            street: klant.street,
            nr: klant.nr,
            postcode: klant.postcode,
            stad: klant.stad,
            tel: klant.tel,
            email: klant.email,
            website: klant.website,
            aanmaak: klant.aanmaak,
            image: klant.image.pic_url,
        }
    })
    return {
        props: { customers: filtered },
    }
}

import { connectToDatabase } from '../util/mangodbHorecastaff'

import Layout from '../components/layout/layout';
import SlideShow from '../components/carousel/carousel.js'


import Head from 'next/head';


/* const items =
    [
        <div className={style.sidetext}>
            <div className="item" data-value="1">
                <img className={style.img}
                    src='https://images.unsplash.com/photo-1587336674521-35e6e2cc7917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop' />
            </div>
            <SideText />
        </div>
        ,
        <div className={style.sidetext}>
            <div className="item" data-value="1">
                <img className={style.img}
                    loading='lazy'
                    src='https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
            </div>
            <SideText />
        </div>
        ,
        <div className={style.sidetext}>
            <div className="item" data-value="1">
                <img className={style.img}
                    loading='lazy'
                    src='https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
            </div>
            <SideText />
        </div>
        ,
        <div className={style.sidetext}>
            <div className="item" data-value="1">
                <img className={style.img}
                    src='https://images.unsplash.com/photo-1549996647-190b679b33d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
            </div>
            <SideText />
        </div>
    ];

const SlideShow = () => {
    return (
        <AliceCarousel
            autoPlay
            autoPlayStrategy="default"
            autoPlayInterval={2000}
            animationDuration={2000}
            animationType="slide"
            infinite
            touchTracking={false}
            disableDotsControls={false}
            disableButtonsControls
            items={items}
        />)
}

 */


export default function Home({ vacatures }) {
    console.log(vacatures)
    return (
        <>
            <Head>
                <title>HO.RE.CA.STAFF</title>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <main>
                <Layout>
                    <SlideShow />
                    <div class='flex flex-row flex-wrap'>
                        {
                            vacatures.map((vacature) => (
                                <div class='flex-auto w-1/3 rounded overflow-hidden shadow-lg m-2'>
                                    <img class='w-full h-full' src={vacature.image} />
                                    <div class='px6  py-4'>
                                        <div class='font-bold text-xl mb-2'>
                                            {vacature.name}
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

    const dataHorecastaff = await db.collection('horecastaffCN').find({}).limit(100).toArray()

    //converte data from MongoDB to readable Javascript.
    const vacatures = JSON.parse(JSON.stringify(dataHorecastaff));

    //Just filter the fields that you need from de DB
    const filtered = vacatures.map(vacature => {
        //const price = JSON.parse(JSON.stringify(vacature.price))
        return { //props
            _id: vacature._id,
            name: vacature.name,
            image: vacature.image.picture_url,
        }
    })
    return {
        props: { vacatures: filtered },
    }
}


/* export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const horecastaff = await db
        .collection('horecastaffCN')
        .find({})
        .limit(20)
        .toArray();
    return {
        props: {
            horecastaff: JSON.parse(JSON.stringify(horecastaff)),
        },
    };
} */
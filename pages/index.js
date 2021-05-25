import Head from 'next/head';
import Header from '@components/header/Header';
import Notes from '../components/nav/nav';
import Footer from '@components/Footer/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ho.re.ca.staff</title>
        <link rel="icon" href="../images/" />
      </Head>

      <Notes/>

      <main>
        
      </main>

      <Footer />
    </div>
  )
}

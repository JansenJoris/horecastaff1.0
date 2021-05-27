import Head from 'next/head';
import Header from '../components/header/Header';
import Notes from '../components/nav/Notes';
import Footer from '../components/footer/Footer';




export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ho.re.ca.staff</title>
        <link rel="icon" href="../images/" />
      </Head>

      <Header/>
      <Notes/>

      <main>
        
      </main>

      <Footer />
    </div>
  )
}

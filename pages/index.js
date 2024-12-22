import Head from 'next/head';
import Header from './components/Header';
import About from './components/About';
import Music from './components/Music';
import Beats from './components/Beats';
import Media from './components/Media';
import Script from 'next/script';
import styles from '../styles/Home.module.css';
import useWindowDimensions from './hooks/useWindowDimensions';

export default function Home() {
  var [width, height] = useWindowDimensions();
  return (
    <>
      <Head>
        <title>BeatHub</title>
        <meta name="description" content="jonathan's beat website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header screenWidth={width}/>
      <main className={styles.main}>
        <About />
        <Music />
        <Beats />
        <Media />
        <p>published!</p>
      </main>

      <footer style={{ position: 'relative', }} className={styles.footer}>
        JMCC BEATS
      </footer>
      <Script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></Script>
    </>
  )
}

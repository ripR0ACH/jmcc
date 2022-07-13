import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header'
import styles from '../styles/Home.module.css';
import useWindowDimensions from './hooks/useWindowDimensions';

export default function Home() {
  const [lock, setLock] = useState(false);
  const {width, height} = useWindowDimensions();
  return (
    <>
      <Head>
        <title>BeatHub</title>
        <meta name="description" content="jonathan's beat website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header screenWidth={width}/>
      <main className={styles.main}>
        {/* - if the width of the screen is less than or equal to 375px, then change the height of the player to be 80px instead of 380px
            - if the screen is wider than 700px, set the width of the player to 700px */}
        <section className={styles.music}>
          <iframe src="https://open.spotify.com/embed/album/7HpeKG3lY2QcDAJ9FOYIvF?utm_source=generator" height={width > 375 ? "380" : "80"} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </section>
        <div className={'w-100 p-md-5'}>
          <iframe src="https://traktrain.com/widget/5089" width="100%" height="800" frameBorder="0"></iframe>
        </div>
        <section>
          <h1>Blog Post</h1>
        </section>
        <section>
          <h1>Merchandise</h1>
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </section>
      </main>

      <footer style={{ position: 'relative', }} className={styles.footer}>
        JMCC BEATS
      </footer>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
    </>
  )
}

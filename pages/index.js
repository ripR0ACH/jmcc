import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import useWindowDimensions from './hooks/useWindowDimensions';

const Nav = () => {
  console.log('yo');
}
Nav();

export default function Home() {
  const [lock, setLock] = useState(false);
  const {height, width} = useWindowDimensions();
  return (
    <>
      <Head>
        <title>BeatHub</title>
        <meta name="description" content="jonathan's beat website" />
        <link rel="icon" href="/favicon.ico" />
<<<<<<< HEAD
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Raleway&family=Roboto&display=swap" rel="stylesheet" />
=======
>>>>>>> 2bf5b43f2b51883dbbb14d98d66aa56452e3741a
      </Head>
      <header className={styles.jumbotron}>
        <nav className={styles.nav}>
          <ul>
            <li>Sub</li>
            <li>Merch</li>
            <Image src='/icon.png' width='100' height='100' />
            <li>About</li>
            <li>Cart</li>
          </ul>
        </nav>
      </header>
      <main className={styles.main + ' p-5'}>
        {/* - if the width of the screen is less than or equal to 375px, then change the height of the player to be 80px instead of 380px
            - if the screen is wider than 700px, set the width of the player to 700px */}
        <section className={styles.music}>
          <iframe src="https://open.spotify.com/embed/album/7HpeKG3lY2QcDAJ9FOYIvF?utm_source=generator" width='100%' height={height <= 375 ? "380" : "80"} frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </section>
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
        <Image src='/icon.png' width='100' height='100' />JMCC BEATS
      </footer>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
    </>
  )
}

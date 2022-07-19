import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Header from './components/Header'
import styles from '../styles/Home.module.css';
import { SocialIcon } from 'react-social-icons';
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
        <section>
          <h1 className='d-flex align-items-center justify-content-center'><span className='pr-3'>About</span><Image src='/jmccbeatssmile56.png' width='56' height='56' className='img-responsive' /></h1>
          <p className='text-center pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque fermentum dui.</p>
        </section>
        <section>
          <div className='row'>
            <div className='col-6 d-flex flex-column align-items-center justify-content-center'>
              <h1><span className='pr-3'>Music</span><Image src='/jmccbeatsglasses56.png' width='56' height='56' className='img-responsive' /></h1>
              <p className='text-center pt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc.
              </p>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <Marquee className=''>
                MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC&nbsp;
              </Marquee>
            </div>
          </div>
        </section>
        <section>
          <div className='row'>
            <div className='col-6 d-flex align-items-center justify-content-center'>
              BEAT SHOP
              {/* <iframe src="https://traktrain.com/widget/5089" width="100%" height="600" frameBorder="0"></iframe> */}
            </div>
            <div className='col-6 d-flex flex-column align-items-center justify-content-center'>
              <h1><span className='pr-3'>Beats</span><Image src='/jmccbeatseat56.png' width='56' height='56' className='img-responsive' /></h1>
              <p className='text-center pt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className='row'>
            <div className='col-6 d-flex flex-column align-items-center justify-content-center'>
              <h1><span className='pr-3'>Media</span><Image src='/jmccbeatswhat56.png' width='56' height='56' className='img-responsive' /></h1>
              <p className='text-center pt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc.
              </p>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <SocialIcon url='https://twitter.com' />
            </div>
          </div>
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

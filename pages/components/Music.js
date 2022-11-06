import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import styles from './styles/Music.module.css'

export default function Music(props) {
    return (
        <section>
            <div className='row'>
                <div className='col-6 d-flex flex-column align-items-center justify-content-center'>
                    <h1><span className='pr-3'>Music</span><Image src='/jmccbeatsglasses56.png' width='56' height='56' className='img-responsive' /></h1>
                    <p className='text-center pt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc.
                    </p>
                </div>
                <div className='col-6 d-flex align-items-center justify-content-center'>
                    {/* this is where I need to add a vinyl stack, or maybe a music carousel */}
                    <Marquee>
                    <div className={styles.album}>
                        <img src='/jmcc_electricity.png' width='200' height='200' />
                    </div>
                    <div className={styles.album}>
                        <img src='/jmcc_drive.png' width='200' height='200' />
                    </div>
                    <div className={styles.album}>
                        <img src='/jmcc_dis_for_the_homies.png' width='200' height='200' />
                    </div>
                    <div className={styles.album}>
                        <img src='/jmcc_slide.png' width='200' height='200' />
                    </div>

                    </Marquee>
                    {/* <Image src='/jmcc_drive.png' width='200' height='200' /> */}
                </div>
            </div>
        </section>
    );
}
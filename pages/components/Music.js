import Image from 'next/image';
import styles from './styles/Music.module.css'

export default function Music(props) {
    return (
        <section>
            <div className='row flex-row-reverse'>
                <div className='my-3 col-sm-6 d-flex align-items-center justify-content-center'>
                    {/* this is where I need to add a vinyl stack, or maybe a music carousel */}
                    <div className={styles.album} style={{ zIndex: 0, }}>
                        <Image src='/jmcc_dis_for_the_homies.png' width='200' height='200' alt='album cover'/>
                    </div>
                    <div className={styles.album} style={{ zIndex: -1, }}>
                        <Image src='/jmcc_drive.png' width='200' height='200' alt='album cover' />
                    </div>
                    <div className={styles.album} style={{zIndex: -2,}}>
                        <Image src='/jmcc_electricity.png' width='200' height='200' alt='album cover' />
                    </div>
                    <div className={styles.album} style={{ zIndex: -3, }}>
                        <Image src='/jmcc_slide.png' width='200' height='200' alt='album cover' />
                    </div>
                    <div className={styles.album} style={{ zIndex: -4, }}>
                        <Image src='/jmcc_time_off_nostalgia.jpeg' width='200' height='200' alt='album cover' />
                    </div>
                    <div className={styles.album} style={{ zIndex: -5, }}>
                        <Image src='/jmcc_unknown_dreams.jpeg' width='200' height='200' alt='album cover' />
                    </div>
                </div>
                <div className='my-3 col-sm-6 d-flex flex-column align-items-center justify-content-center'>
                    <h1><span className='pr-3'>Music</span><Image src='/jmccbeatsglasses56.png' width='56' height='56' className='img-responsive' alt='music icon'/></h1>
                    <p className='text-center pt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc.
                    </p>
                </div>
            </div>
        </section>
    );
}
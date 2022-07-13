import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Header(props) {
    const nav_options = ['Sub', 'Merch', 'About', 'Cart']
    return (
        <header className={styles.jumbotron}>
            <nav className={styles.nav}>
                <Marquee speed={100} style={{ color: 'black', position: 'absolute', width: '100vw', zIndex: '0' }} play={true} direction={"left"} gradient={false}>
                    JMCC BEATS JMCC BEATS JMCC BEATS JMCC BEATS JMCC BEATS JMCC BEATS JMCC BEATS JMCC BEATS JMCC BEATS JMCC BEATS
                </Marquee>
                <ul>
                    <li>{props.screenWidth}</li>
                    <li>Merch</li>
                    <div className={styles.navImg}>
                        <Image src='/icon.png' width='100' height='100' />
                    </div>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </header>
    );
}
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Header(props) {
    const nav_options = ['Sub', 'Merch', 'About', 'Cart']
    return (
        <header className={styles.jumbotron}>
            <nav className={styles.nav}>
                <Marquee className={styles.marquee} play={props.screenWidth < 550 ? false : true} direction={"right"} gradient={false}>
                    JMCC BEATS&nbsp;&nbsp;&nbsp;&nbsp;JMCC BEATS&nbsp;&nbsp;&nbsp;&nbsp;JMCC BEATS&nbsp;&nbsp;&nbsp;&nbsp;JMCC BEATS&nbsp;&nbsp;&nbsp;&nbsp;JMCC BEATS&nbsp;&nbsp;&nbsp;&nbsp;JMCC BEATS&nbsp;&nbsp;&nbsp;&nbsp;JMCC BEATS&nbsp;&nbsp;&nbsp;&nbsp;JMCC BEATS&nbsp;&nbsp;&nbsp;&nbsp;JMCC BEATS&nbsp;&nbsp;&nbsp;&nbsp;JMCC BEATS&nbsp;&nbsp;&nbsp;&nbsp;
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
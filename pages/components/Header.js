import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Header(props) {
    const nav_options = ['Sub', 'Merch', 'About', 'Cart'];
    let marquee_text = () => {
        let text = "";
        for (let i = 0; i < 20; i++) {
            text += "JMCC BEATS ";
        }
        return text;
    }
    return (
        <header className={styles.jumbotron}>
            <nav className={styles.nav}>
                <Marquee className={styles.marquee} play={props.screenWidth < 550 ? false : true} direction={"right"} gradient={false}>
                    {marquee_text()}
                </Marquee>
                <ul>
                    <li>{props.screenWidth}</li>
                    <li>Music</li>
                    <div className={styles.navImg}>
                        <Image src='/icon.png' width='100' height='100' alt='nav icon'/>
                    </div>
                    <li>Beats</li>
                    <li>Media</li>
                </ul>
            </nav>
        </header>
    );
}
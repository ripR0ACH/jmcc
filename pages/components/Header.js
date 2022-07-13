import styles from '../../styles/Home.module.css';
import Image from 'next/image';

export default function Header(props) {
    const nav_options = ['Sub', 'Merch', 'About', 'Cart']
    return (
        <header className={styles.jumbotron}>
            <nav className={styles.nav}>
                <ul>
                    <li>{props.screenWidth}</li>
                    <li>Merch</li>
                    <li>About</li>
                    <li>Cart</li>
                    <div className={styles.navImg}>
                        <Image src='/icon.png' width='100' height='100' />
                    </div>
                </ul>
            </nav>
        </header>
    );
}
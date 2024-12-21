import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import logo from "../../public/assets/images/icon.png";

export default function Header(props) {
    const text = () => {
        return Array.from({ length: 20 }).map((_, index) => (
            <span key={index}>JMCC BEATS</span>
        ));
    };
    const links = ['Sub', 'Merch', 'About', 'Cart'];
    const nav = links.map((link, index) => {
        if (index === 2) {
            return (
                <>
                    <div key="nav-logo" className={styles.navImg}>
                        <Image src={logo} width="100" height="100" alt="nav icon" />
                    </div>
                    <li>{link}</li>
                </>
            );
        }
        return <li key={index}>{link}</li>;
    });
    
    const marqueeRef = useRef(null);
    const marqueeText = () => {
        // Generate 20 spans with the text "JMCC BEATS"
        return Array.from({ length: 20 }).map((_, index) => (
            <span key={index}>JMCC BEATS </span>
        ));
    };

    useEffect(() => {
        const marqueeElement = marqueeRef.current;

        // Duplicate the content for seamless scrolling
        const contentWidth = marqueeElement.scrollWidth; // Get total width of the content
        marqueeElement.style.width = `${contentWidth * 2}px`; // Set total width to twice the content width

        // Function to animate the marquee
        const animateMarquee = () => {
            let currentPosition = parseInt(marqueeElement.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
            currentPosition -= 1; // Move left by 1px

            // Reset position when content scrolls completely
            if (currentPosition <= -contentWidth) {
                currentPosition = 0;
            }

            marqueeElement.style.transform = `translateX(${currentPosition}px)`;
        };

        // Start the animation
        const intervalId = setInterval(animateMarquee, 10); // Move left by 1px every 10ms

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <header className={styles.jumbotron}>
            <nav className={styles.nav}>
                <div className={styles.marqueeContainer}>
                    <div ref={marqueeRef} className={styles.marquee}>
                        {marqueeText()}
                        {marqueeText()}
                    </div>
                </div>
                <ul>
                    {nav}
                </ul>
            </nav>
        </header>
    );
}
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import logo from "../../public/assets/images/icon.png";
import cart from "../../public/assets/shopping-cart.svg";
import Link from 'next/link';

export default function Header(props) {
    const links = ['Music', 'Merch', 'About', 'Cart'];
    const nav = links.map((link, index) => {
        if (index === 3) {
            return <li key={index}><Link href={"/"+link}><Image src={cart} alt="shopping cart" style={{fontWeight: "900", filter: "invert(100%) sepia(0%) saturate(100%) hue-rotate(252deg) brightness(103%) contrast(101%)"}}/></Link></li>;
        }
        return <li key={index}><Link href={"/"+link}>{link}</Link></li>;
    });

    const marqueeRef = useRef(null);

    useEffect(() => {
        const marqueeElement = marqueeRef.current;

        // Function to create a span element
        const createSpan = () => {
            const span = document.createElement('span');
            span.textContent = "JMCC BEATS";
            span.style.padding = "0 1rem";
            span.style.whiteSpace = "nowrap";
            return span;
        };

        // Add initial spans to fill the marquee
        const fillMarquee = () => {
            const marqueeWidth = marqueeElement.offsetWidth;
            let totalContentWidth = 0;

            while (totalContentWidth < marqueeWidth * 2) {
                const newSpan = createSpan();
                marqueeElement.appendChild(newSpan);
                totalContentWidth += newSpan.offsetWidth;
            }
        };

        // Move the marquee and recycle elements
        let position = 0;

        const animateMarquee = () => {
            const children = Array.from(marqueeElement.children);
            if (children.length === 0) return;

            children.forEach((child) => {
                const currentLeft = parseFloat(getComputedStyle(child).left || 0);
                child.style.left = `${currentLeft - 2}px`
                if (currentLeft + child.offsetWidth < 0) {
                    marqueeElement.removeChild(child);
                }
            })
            const lastChild = children[children.length - 1];
            if (lastChild) {
                const lastChildRight = parseFloat(lastChild.style.left) + lastChild.offsetWidth;
                if (lastChildRight < marqueeElement.offsetWidth) {
                    const newSpan = createSpan();
                    newSpan.style.left = `${lastChildRight}px`;
                    marqueeElement.appendChild(newSpan);
                }
            }
            requestAnimationFrame(animateMarquee);
        };

        // Initial setup
        fillMarquee();
        animateMarquee();

        // Cleanup on unmount
        return () => {
            marqueeElement.innerHTML = ""; // Cleanup on unmount
        };
    }, []);


    return (
        <header className={styles.jumbotron}>
            <div className={styles.navImg}>
                <Image src={logo} width="100" height="100" alt="nav icon" />
            </div>
            <nav className={styles.nav}>
                <ul>
                    {nav}
                </ul>
            </nav>
            <div className={styles.marqueeContainer}>
                <div ref={marqueeRef} className={styles.marquee}></div>
            </div>
        </header>
    );
}
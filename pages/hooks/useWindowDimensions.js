import { useState, useEffect } from 'react';


export default function useWindowDimensions() {

    const wind = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = wind ? window.innerWidth : null;
        const height = wind ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (wind) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [wind]);

    return windowDimensions;
}
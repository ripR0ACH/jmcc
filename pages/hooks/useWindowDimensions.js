import { useState, useEffect, useCallback } from 'react';


export default function useWindowDimensions() {
    const getWindowDimensions = useCallback(() => {
        let wind = typeof window !== 'undefined';
        const width = wind ? window.innerWidth : null;
        const height = wind ? window.innerHeight : null;
        return [width, height];
    }, []);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        if (windowDimensions) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions);
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [windowDimensions, getWindowDimensions]);

    return windowDimensions;
}
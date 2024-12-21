import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

    const [windowDimensions, setWindowDimensions] = useState(() => {
            const width = typeof window !== 'undefined' ? window.innerWidth : null;
            const height = typeof window !== 'undefined' ? window.innerHeight : null;
            return [
                width,
                height,
            ]
        }
    )
    useEffect(() => {
        if (windowDimensions) {
            function handleResize() {
                setWindowDimensions(() => {
                        const width = typeof window !== 'undefined' ? window.innerWidth : null;
                        const height = typeof window !== 'undefined' ? window.innerHeight : null;
                        return [
                            width,
                            height,
                        ]
                    }
                );
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [windowDimensions]);

    return windowDimensions;
}

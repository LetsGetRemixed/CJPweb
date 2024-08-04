import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                const yOffset = -80; // Adjust this value based on your fixed navbar height
                const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: yPosition, behavior: 'smooth' });
            }
        } else {
            // Scroll to top if no hash, or if the pathname changes
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash, pathname]);
}

export default useScrollToHash;


import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
}

const useIntersectionObserver = (
    ref: RefObject<Element>,
    options: IntersectionObserverOptions
): IntersectionObserverEntry | undefined => {
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    useEffect(() => {
        const node = ref?.current; // Capture the current reference

        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            setEntry(entry);
        }, options);

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, [ref, options]);

    return entry;
};

export default useIntersectionObserver;

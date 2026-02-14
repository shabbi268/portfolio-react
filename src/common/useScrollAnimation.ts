import { useEffect, useRef } from 'react'

interface UseScrollAnimationOptions {
    threshold?: number
    rootMargin?: string
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
    const { threshold = 0.1, rootMargin = '0px' } = options
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in')
                observer.unobserve(entry.target)
            }
        }, {
            threshold,
            rootMargin
        })

        observer.observe(ref.current)

        return () => {
            observer.disconnect()
        }
    }, [threshold, rootMargin])

    return ref
}

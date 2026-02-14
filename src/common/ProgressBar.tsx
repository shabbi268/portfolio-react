import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledProgressBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, rgba(255, 140, 0, 0.9) 0%, rgba(35, 166, 213, 0.9) 100%);
    z-index: 1000;
    transition: width 0.1s ease;
    box-shadow: 0 2px 10px rgba(255, 140, 0, 0.3);

    @media (max-width: 768px) {
        height: 3px;
    }
`;

const ProgressBar: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = (window.scrollY / windowHeight) * 100
            setScrollProgress(scrolled)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return <StyledProgressBar style={{ width: `${scrollProgress}%` }} />
}

export default ProgressBar

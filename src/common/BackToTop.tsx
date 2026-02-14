import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledBackToTopButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.9) 0%, rgba(35, 166, 213, 0.9) 100%);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(255, 140, 0, 0.3);
    outline: none;

    &.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    &:hover {
        background: linear-gradient(135deg, rgba(255, 140, 0, 1) 0%, rgba(35, 166, 213, 1) 100%);
        box-shadow: 0 8px 30px rgba(255, 140, 0, 0.5);
        transform: translateY(-5px);
    }

    &:active {
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
        font-size: 20px;
    }
`;

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <StyledBackToTopButton
            className={isVisible ? 'visible' : ''}
            onClick={scrollToTop}
            title="Back to top"
            aria-label="Back to top"
            aria-hidden={!isVisible}
        >
            ↑
        </StyledBackToTopButton>
    )
}

export default BackToTop

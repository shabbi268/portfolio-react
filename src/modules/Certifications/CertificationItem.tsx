import React from 'react'
import styled from 'styled-components';
import { useTilt } from '../../common/useTilt';

export interface ICertificationItemProps {
    title: string;
    src: string;
    year?: string;
    showCertificationImage?: boolean;
    index?: number;
}

const StyledButton = styled.button`
    padding: 0.6em 1.2em;
    border: 2px solid rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #333;
    margin: 6px;
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(0, 0, 0, 0.5);
    }
`;

const StyledCertificationItem = styled.div<{ $index?: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5em;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 0.8s ease-out ${props => props.$index ? `${0.1 + (props.$index * 0.1)}s` : '0s'} both;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    
    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
        );
        transform: rotate(45deg);
        animation: shimmer 3s infinite;
    }
    
    &:hover {
        transform: translateY(-12px) scale(1.12);
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);
        border-color: rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.14);
    }
    
    h3 {
        font-size: 18px;
        margin-bottom: .5em;
        font-weight: 600;
        color: #000000;
        position: relative;
        z-index: 1;
        text-align: center;
        width: 100%;
    }
    
    span {
        font-size: 15px;
        text-align: center;
        color: #333333;
        position: relative;
        z-index: 1;
        width: 100%;
        
        &:first-of-type {
            font-weight: 500;
            color: #222222;
        }
    }
    
    img {
        max-width: 150px;
        max-height: 150px;
        margin-top: 1em;
        border-radius: 8px;
        animation: float 3s ease-in-out infinite;
        transition: all 0.3s ease-out;
        position: relative;
        z-index: 1;
        box-shadow: 0 8px 24px rgba(238, 119, 82, 0.2);
        
        &:hover {
            box-shadow: 0 16px 48px rgba(238, 119, 82, 0.5);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
    
    @keyframes shimmer {
        0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
        }
        100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-12px);
        }
    }
`;

const CertificationItem = ({title, year, src, showCertificationImage = false, index = 0}: ICertificationItemProps) => {
    const { ref, tilt } = useTilt();
    return (
        <StyledCertificationItem 
            ref={ref}
            $index={index}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                margin: '10px',
                padding: '5px'
            }}
        >
            <h3 style={{fontWeight: 500}}>{title}</h3>
            <span>{year}</span>
            <span>
                {src && <StyledButton onClick={() => window.open(src)}>See Credential</StyledButton>}
            </span>
            {showCertificationImage && (
                <img src={src} alt={title} title={title} />   
            )}
        </StyledCertificationItem>
    )
}

export default CertificationItem

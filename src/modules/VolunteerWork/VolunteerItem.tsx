import React from 'react'
import styled from 'styled-components';
import { useTilt } from '../../common/useTilt';

export interface IVolunteerItemProps {
    title: string;
    description: string;
    startingYear?: string;
    endingYear?: string;
    index?: number;
}

const StyledVolunteerItem = styled.div<{ $delay?: number }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin-top: 1em;
    padding: 1.8em;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 0.8s ease-out ${props => props.$delay ? `${props.$delay}s` : '0s'} both;
    transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    max-width: 600px;
    min-height: 200px;
    transform-style: preserve-3d;
    perspective: 1000px;
    
    &:hover {
        transform: translateY(-14px) scale(1.01);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.25);
    }
    
    h3 {
        font-size: 18px;
        margin-bottom: 0.8em;
        font-weight: 700;
        color: #000000;
        letter-spacing: 0.3px;
        position: relative;
        z-index: 2;
    }
    
    span {
        font-size: 15px;
        text-align: center;
        color: #333333;
        line-height: 1.7;
        flex-grow: 1;
        position: relative;
        z-index: 2;
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
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: scaleX(0);
            transform-origin: left;
        }
        to {
            opacity: 1;
            transform: scaleX(1);
            transform-origin: left;
        }
    }
`;

const VolunteerItem = ({title, description, index = 0}: IVolunteerItemProps) => {
    const { ref, tilt } = useTilt();
    const delayTime = 0.1 + (index * 0.15);
    return (
        <StyledVolunteerItem 
            ref={ref}
            $delay={delayTime}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
        >
            <h3>{title}</h3>
            <span>{description}</span>
        </StyledVolunteerItem>
    )
}

export default VolunteerItem

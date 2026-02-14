import React from 'react'
import styled from 'styled-components';
import { useTilt } from '../../common/useTilt';

export interface IEducationItem {
    title: string;
    institute: string;
    startingYear: string;
    endingYear: string | null;
    index?: number;
}

const StyledEducationItem = styled.div<{ $delay?: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    padding: 1.2em;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 0.8s ease-out ${props => props.$delay ? `${props.$delay}s` : '0s'} both;
    transition: all 0.3s ease-out;
    transform-style: preserve-3d;
    perspective: 1000px;
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.4);
    }
    
    h3 {
        font-size: 18px;
        margin-bottom: .5em;
        font-weight: 600;
        color: #000000;
    }
    
    span {
        font-size: 15px;
        color: #333333;
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
`;

const EducationItem = ({title, institute, startingYear, endingYear, index = 0}: IEducationItem) => {
    const { ref, tilt } = useTilt();
    const delayTime = 0.1 + (index * 0.15);
    return (
        <StyledEducationItem 
            ref={ref}
            $delay={delayTime}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
        >
            <h3>{title}</h3>
            <span>{institute}, {startingYear} - {endingYear}</span>
        </StyledEducationItem>
    )
}

export default EducationItem

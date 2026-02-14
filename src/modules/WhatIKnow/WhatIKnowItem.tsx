import React from 'react'
import styled from 'styled-components';
import { useTilt } from '../../common/useTilt';

const StyledWhatIKnowItem = styled.div`
    margin: 0 2em;
    padding: 30px 0;
    position: relative;
    animation: fadeInUp 0.8s ease-out;
    transition: all 0.3s ease;
    overflow: visible;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    perspective: 1000px;
    cursor: pointer;

    &:hover {
        transform: translateY(-15px) scale(1.12);
        filter: drop-shadow(0 20px 48px rgba(255, 140, 0, 0.4));
        z-index: 20;
    }

    &.tilt-active {
        transform-style: preserve-3d;
    }

    > img {
        width: 100px;
        height: 100px;
        opacity: 0.8;
        transition: all 0.3s ease;
        filter: grayscale(90%);
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transform-style: preserve-3d;

        &:hover {
            opacity: 1;
            filter: grayscale(0%);
            box-shadow: 0 12px 36px rgba(255, 140, 0, 0.35);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const StyledTooltip = styled.div<{$show?: boolean}>`
    position: absolute;
    top: -50px;
    left: 50%;
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.95) 0%, rgba(35, 166, 213, 0.95) 100%);
    color: white;
    padding: 0.6em 1.2em;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    pointer-events: none;
    opacity: ${props => props.$show ? 1 : 0};
    transform: ${props => props.$show ? 'translateX(-50%) translateY(0px)' : 'translateX(-50%) translateY(10px)'};
    transition: all 0.2s ease;
    z-index: 200;
    box-shadow: 0 8px 20px rgba(255, 140, 0, 0.4);
    letter-spacing: 0.3px;
    visibility: ${props => props.$show ? 'visible' : 'hidden'};

    &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 12px;
        height: 12px;
        background: linear-gradient(135deg, rgba(255, 140, 0, 0.95) 0%, rgba(35, 166, 213, 0.95) 100%);
        border-radius: 2px;
        rotate: 45deg;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 0.5em 1em;
    }
`;

export enum EWhatIKnowItemType {
    COMPONENT_FRAMRWORKS_LIBRARIES = 'Component frameworks / libraries',
    TESTING_FRAMEWORKS = 'Testing frameworks',
    BACKEND = 'Backend',
    DATABASES = 'Databases',
    UI_STYLING = 'UI and Styling',
    UI_FRAMEWORKS = 'UI frameworks',
    LANGUAGES_SUPERSETS = 'Languages / Supersets',
}

export interface IWhatIKnowItem {
    logo: string;
    name: string;
    type?: EWhatIKnowItemType;
    isCurrentlyUsing?: boolean;
    src?: string;
}

const WhatIKnowItem = ({logo, name, isCurrentlyUsing = false, src}: IWhatIKnowItem) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const { ref, tilt } = useTilt();
    const transformStyle = `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`;

    return (
        <StyledWhatIKnowItem 
            ref={ref}
            style={{transform: transformStyle}}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <img title={name} src={src} alt={name} />
            <StyledTooltip $show={showTooltip}>{name}</StyledTooltip>
        </StyledWhatIKnowItem>
    )
}

export default WhatIKnowItem

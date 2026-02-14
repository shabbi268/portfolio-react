import React from 'react'
import styled from 'styled-components';
import { config, themeConfig } from '../../config';
import { useTilt } from '../../common/useTilt';
import { IWorkplace } from './WorkExperience';

const StyledWorkplaceItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeInUp 0.8s ease-out;
    transition: all 0.3s ease;
    transform-style: preserve-3d;
    perspective: 1000px;
    
    &:hover {
        transform: translateY(-10px) scale(1.12);
        filter: drop-shadow(0 20px 40px rgba(255, 140, 0, 0.3));
    }

    > img {
        width: 200px;
        border-radius: 10px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(255, 140, 0, 0.15);
        animation: float 3s ease-in-out infinite;

        &:hover {
            box-shadow: 0 12px 40px rgba(255, 140, 0, 0.45);
            transform: scale(1.1);
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

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;

const StyledWorkplaceLine = styled.div`
    height: 100px;
    width: 1px;
    background: linear-gradient(180deg, ${themeConfig[config.theme].main} 0%, transparent 100%);
    margin-top: 1em;
    animation: slideDown 0.8s ease-out;

    @keyframes slideDown {
        from {
            height: 0;
            opacity: 0;
        }
        to {
            height: 100px;
            opacity: 1;
        }
    }
`;


const StyledWorkplaceTitle = styled.span`
    font-weight: 500;
    padding-top: .5em;
    padding-bottom: .5em;
    animation: fadeInUp 0.8s ease-out 0.2s both;
    text-align: center;
    width: 100%;

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


const StyledWorkplaceDates = styled.div`
    padding-top: .5em;
    padding-bottom: .5em;
    animation: fadeInUp 0.8s ease-out 0.3s both;
    font-size: 0.9em;
    color: ${themeConfig[config.theme].main};
    text-align: center;
    width: 100%;

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

const StyledCompanyName = styled.span`
    font-weight: 600;
    font-size: 0.95em;
    margin-top: .5em;
    text-align: center;
    color: ${themeConfig[config.theme].main};
    animation: fadeInUp 0.8s ease-out 0.1s both;

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

const WorkplaceItem = ({company, title, startingYear, endingYear, showWorkplaceName = false, showWorkplaceImage = false, src, isLast = false, location }: IWorkplace & {isLast: boolean}) => {
    const { ref, tilt } = useTilt();
    return (
        <StyledWorkplaceItem
            ref={ref}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
        >
            {showWorkplaceImage && <img src={src} alt={company.toLowerCase()} />}
            {showWorkplaceImage && <StyledCompanyName>{company}</StyledCompanyName>}
            {showWorkplaceName && company}
            <StyledWorkplaceTitle>{title}</StyledWorkplaceTitle>
            <StyledWorkplaceTitle>{location}</StyledWorkplaceTitle>
            <StyledWorkplaceDates>{startingYear} - {endingYear ?? 'Present'}</StyledWorkplaceDates>
            {!isLast && <StyledWorkplaceLine />}
        </StyledWorkplaceItem>
    )
}

export default WorkplaceItem

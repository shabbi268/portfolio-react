import React from 'react'
import styled from 'styled-components';
import { StyledCommonSection, StyledTitle } from '../../common/styles'
import { IModuleBase } from '../../contracts'
import { useTilt } from '../../common/useTilt';

export interface IProjectItemData {
    title: string;
    description: string;
    startingYear?: string;
    endingYear?: string;
}

export interface IProjectsProps extends IModuleBase {
    data: IProjectItemData[];
}

const StyledProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em;
    justify-content: center;
    align-items: stretch;
    max-width: 1200px;
    margin: 0 auto;
    animation: fadeInUp 0.8s ease-out 0.2s both;
    
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

const StyledProjectCard = styled.div<{ $index?: number }>`
    flex: 1 1 calc(50% - 0.75em);
    min-width: 280px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    padding: 1.5em;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 0.8s ease-out ${props => props.$index ? `${0.1 + (props.$index * 0.1)}s` : '0s'} both;
    transition: all 0.3s ease-out;
    transform-style: preserve-3d;
    perspective: 1000px;
    
    &:hover {
        transform: translateY(-12px);
        box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.4);
    }
    
    h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 0.8em;
        color: #000000;
    }
    
    p {
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 1em;
        color: #333333;
        flex-grow: 1;
    }
    
    span {
        font-size: 12px;
        font-weight: 500;
        color: #555555;
        margin-top: auto;
        padding-top: 1em;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    @media (max-width: 768px) {
        flex: 1 1 100%;
        max-width: 100%;
    }
`;

const Projects = ({data, title, index}: IProjectsProps) => {
    return (
        <StyledCommonSection id={`module-${index}`}>
            <StyledTitle>{title}</StyledTitle>
            <StyledProjectsContainer>
                {data.map((project, idx) => (
                    <ProjectCard key={idx} project={project} idx={idx} />
                ))}
            </StyledProjectsContainer>
        </StyledCommonSection>
    )
}

const ProjectCard = ({project, idx}: {project: IProjectItemData; idx: number}) => {
    const { ref, tilt } = useTilt();
    return (
        <StyledProjectCard 
            ref={ref}
            $index={idx}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
        >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.startingYear} - {project.endingYear}</span>
        </StyledProjectCard>
    )
}

export default Projects

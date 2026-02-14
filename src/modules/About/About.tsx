import React from 'react'
import styled from 'styled-components';
import { StyledTitle, StyledCommonSection, StyledParagraph, StyledSecondaryTitle } from '../../common/styles'
import { IModuleBase } from '../../contracts';
import EducationItem, { IEducationItem } from './EducationItem'

export interface IAboutProps extends IModuleBase {
    data: any;
}

const StyledAbout = styled.div`
    max-width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    
    > div {
        width: 100%;
        animation: fadeInUp 0.8s ease-out forwards;
        
        &:nth-child(2) { animation-delay: 0.1s; }
        &:nth-child(3) { animation-delay: 0.2s; }
        &:nth-child(4) { animation-delay: 0.3s; }
        &:nth-child(5) { animation-delay: 0.4s; }
        &:nth-child(6) { animation-delay: 0.5s; }
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

const About = ({data, title, index}: IAboutProps) => {
    return (
        <StyledCommonSection id={`module-${index}`}>
            <StyledAbout>
                <StyledTitle>{title}</StyledTitle>
                <StyledParagraph paddingTop="0">{data.about}</StyledParagraph>
                {data.linkedInBio.map((item: any, index: any) => {
                    return (
                        <div key={index}>
                        <StyledSecondaryTitle>{item.title}</StyledSecondaryTitle>
                        <StyledParagraph paddingTop="0">{item.content}</StyledParagraph>
                        </div>
                    )
                })}
                <StyledSecondaryTitle>{data.education.title}</StyledSecondaryTitle>
                {data.education.data.map((edu: IEducationItem, index: any) => 
                    <EducationItem key={index} index={index} title={edu.title} institute={edu.institute} startingYear={edu.startingYear} endingYear={edu.endingYear} />
                )}
            </StyledAbout>
        </StyledCommonSection>
    )
}

export default About

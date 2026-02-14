import React from 'react'
import styled from 'styled-components';
import { StyledBackgroundCover, StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'
import { IModuleBase } from '../../contracts'
import VolunteerItem, { IVolunteerItemProps } from './VolunteerItem'

export interface IVolunteerWorkProps extends IModuleBase {
    data: IVolunteerItemProps[];
}

const StyledProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3em;
    width: 100%;
    max-width: 1200px;
    margin: 2em auto;
    animation: fadeInUp 0.8s ease-out 0.2s both;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2em;
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

const VolunteerWork = ({data, title, index, alternateBackground}: IVolunteerWorkProps) => {
    return (
        <StyledCommonSection id={`module-${index}`} alternateBackground={alternateBackground}>
                <StyledBackgroundCover fadeAmount={40} />
                <StyledBackgroundTopper>
                <StyledTitle>{title}</StyledTitle>
                <StyledProjectsGrid>
                    {data.map((vi, idx) => <VolunteerItem index={idx} title={vi.title} description={vi.description} emoji={vi.emoji} key={idx} />)}
                </StyledProjectsGrid>
            </StyledBackgroundTopper>
        </StyledCommonSection>
    )
}

export default VolunteerWork

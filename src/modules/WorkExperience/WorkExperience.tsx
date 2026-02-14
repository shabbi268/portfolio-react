import React from 'react'
import { StyledBackgroundCover, StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'
import { IModuleBase } from '../../contracts'
import Workplace from './WorkplaceItem'

export interface IWorkplace {
    company: string;
    title: string;
    startingYear: number;
    endingYear: number | null;
    showWorkplaceName?: boolean;
    showWorkplaceImage?: boolean;
    src?: string;
    location?: string;
}
export interface IWorkExperienceProps extends IModuleBase {
    data: IWorkplace[];
}

const WorkExperience = ({data, title, index, alternateBackground}: IWorkExperienceProps) => {
    return (
        <StyledCommonSection id={`module-${index}`} alternateBackground={alternateBackground}>
            <StyledBackgroundCover fadeAmount={40} />
                <StyledBackgroundTopper>
                <StyledTitle>{title}</StyledTitle>
                {
                    data.map((wp, index) => 
                        <Workplace key={index} {...wp} isLast={index === data.length-1}/>
                    )
                }
            </StyledBackgroundTopper>
        </StyledCommonSection>
    )
}

export default WorkExperience

import React from 'react'
import { StyledBackgroundCover, StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'
import { config } from '../../config'
import { IModuleBase } from '../../contracts'
import VolunteerItem, { IVolunteerItemProps } from './VolunteerItem'

export interface IVolunteerWorkProps extends IModuleBase {
    data: IVolunteerItemProps[];
}

const VolunteerWork = ({data, title, index}: IVolunteerWorkProps) => {
    return (
        <StyledCommonSection id={`module-${index}`}>
                <StyledBackgroundCover fadeAmount={40} />
                <StyledBackgroundTopper>
                <StyledTitle>{title}</StyledTitle>
                {data.map((vi, index) => <VolunteerItem title={vi.title} description={vi.description} key={index} />)}
            </StyledBackgroundTopper>
        </StyledCommonSection>
    )
}

export default VolunteerWork

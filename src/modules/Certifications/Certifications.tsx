import React from 'react'
import { StyledBackgroundCover, StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'
import { config } from '../../config'
import { IModuleBase } from '../../contracts'
import CertificationItem, { ICertificationItemProps } from './CertificationItem';
import Marquee from "react-fast-marquee";

export interface ICertificationsProps extends IModuleBase {
    data: ICertificationItemProps[];
}

const Certifications = ({data, title, index}: ICertificationsProps) => {
    return (
        <StyledCommonSection backgroundUrl={`./assets/themes/${config.theme}/2.jpg`} id={`module-${index}`}>
                <StyledBackgroundCover fadeAmount={40} />
                <StyledBackgroundTopper>
                <StyledTitle>{title}</StyledTitle>
                <div className="certificationsList" style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "space-around", justifyContent: "space-evenly"}}>
                    {data.map(cert => <CertificationItem title={cert.title} src={cert.src} year={cert.year} />)}
                </div>
            </StyledBackgroundTopper>
        </StyledCommonSection>
    )
}

export default Certifications

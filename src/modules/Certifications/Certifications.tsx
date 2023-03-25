import React, { useState } from 'react';
import { config, themeConfig } from '../../config';
import { StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'
import { IModuleBase } from '../../contracts'
import CertificationItem, { ICertificationItemProps } from './CertificationItem';
import Marquee from "react-fast-marquee";
import { Button } from '@chakra-ui/react';

enum ECertificationsDisplay {
    LIST = "list",
    MARQUEE = "marquee",
    BOTH = "both"
}
export interface ICertificationsProps extends IModuleBase {
    data: ICertificationItemProps[];
    display?: ECertificationsDisplay;
}

const Certifications = ({data, display, title, index}: ICertificationsProps) => {
    const [isList, setIsList] = useState(display === ECertificationsDisplay.LIST);

    return (
        <StyledCommonSection id={`module-${index}`}>
                {/* <StyledBackgroundCover fadeAmount={40} /> */}
                <StyledBackgroundTopper>
                <StyledTitle>{title}</StyledTitle>
                </StyledBackgroundTopper>
                {display === ECertificationsDisplay.BOTH && <Button colorScheme={themeConfig[config.theme].color} variant="outline" size="xs" onClick={() => setIsList(!isList)}>{!isList ? 'View as list' : 'View as marquee'}</Button>}
                <div>
                {!isList ? 
                    <Marquee speed={50} pauseOnHover={true}>
                        {data.map((item, index) => 
                            <CertificationItem key={index} title={item.title} src={item.src} year={item.year} showCertificationImage={item.showCertificationImage} />
                        )}
                    </Marquee> : 
                    <div className="certificationsList" style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "space-around", justifyContent: "space-evenly"}}>
                        {data.map((cert, index) => <CertificationItem key={index} showCertificationImage={cert.showCertificationImage} title={cert.title} src={cert.src} year={cert.year} />)}
                    </div>
                }
                </div>
        </StyledCommonSection>
    )
}

export default Certifications

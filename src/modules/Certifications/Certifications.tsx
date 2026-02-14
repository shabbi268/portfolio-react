import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'
import { IModuleBase } from '../../contracts'
import CertificationItem, { ICertificationItemProps } from './CertificationItem';
import Marquee from "react-fast-marquee";

const StyledToggleButton = styled.button`
    padding: 0.5em 1em;
    border-radius: 6px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: #000;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.3s ease;
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(0, 0, 0, 0.4);
    }
`;

const StyledMarqueeContainer = styled.div`
    width: 100%;
    overflow: hidden;
    overflow-y: hidden;
    animation: fadeInUp 0.8s ease-out 0.2s both;
    
    .rfm-marquee-container {
        overflow: hidden !important;
        overflow-y: hidden !important;
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

const StyledCertificationsListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5em;
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

enum ECertificationsDisplay {
    LIST = "list",
    MARQUEE = "marquee",
    BOTH = "both"
}
export interface ICertificationsProps extends IModuleBase {
    data: ICertificationItemProps[];
    display?: ECertificationsDisplay;
}

const Certifications = ({data, display, title, index, alternateBackground}: ICertificationsProps) => {
    const [isList, setIsList] = useState(display === ECertificationsDisplay.LIST);

    return (
        <StyledCommonSection id={`module-${index}`} alternateBackground={alternateBackground}>
                <StyledBackgroundTopper>
                    <StyledTitle>{title}</StyledTitle>
                </StyledBackgroundTopper>
                {display === ECertificationsDisplay.BOTH && (
                    <div style={{ textAlign: 'center', marginBottom: '1.5em' }}>
                        <StyledToggleButton onClick={() => setIsList(!isList)}>
                            {!isList ? 'View as list' : 'View as marquee'}
                        </StyledToggleButton>
                    </div>
                )}
                {!isList ? 
                    <StyledMarqueeContainer>
                        <Marquee speed={50} pauseOnHover={true}>
                            {data.map((item, index) => 
                                <CertificationItem key={index} index={index} title={item.title} src={item.src} year={item.year} showCertificationImage={item.showCertificationImage} />
                            )}
                        </Marquee>
                    </StyledMarqueeContainer> : 
                    <StyledCertificationsListContainer>
                        {data.map((cert, index) => <CertificationItem key={index} index={index} showCertificationImage={cert.showCertificationImage} title={cert.title} src={cert.src} year={cert.year} />)}
                    </StyledCertificationsListContainer>
                }
        </StyledCommonSection>
    )
}

export default Certifications

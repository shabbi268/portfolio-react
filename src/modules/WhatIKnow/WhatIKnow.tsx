import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import styled from 'styled-components';
import { StyledCommonSection, StyledTitle } from '../../common/styles';
import { IModuleBase } from '../../contracts';
import WhatIKnowItem, { EWhatIKnowItemType, IWhatIKnowItem } from './WhatIKnowItem';
import WhatIKnowListGroupContainer from './WhatIKnowListGroupContainer';

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

const StyledWhatIKnow = styled.div`
    margin: 3em 0 0 0;
    width: 100%;
    overflow: visible;
    position: relative;
    z-index: 5;
`;

const StyledWhatIKnowList = styled.div`
    margin-top: -1.5em;
    width: 100%;
`;

enum EWhatIKnowDisplay {
    LIST = "list",
    MARQUEE = "marquee",
    BOTH = "both"
}

export interface IWhatIKnowProps extends IModuleBase {
    data: IWhatIKnowItem[];
    display?: EWhatIKnowDisplay;
}

const WhatIKnow = ({data, display, title, index, alternateBackground}: IWhatIKnowProps) => {

    const [isList, setIsList] = useState(display === EWhatIKnowDisplay.LIST);

    return (
        <StyledCommonSection id={`module-${index}`} alternateBackground={alternateBackground}>
            <StyledTitle>{title}</StyledTitle>
            {display === EWhatIKnowDisplay.BOTH && <StyledToggleButton onClick={() => setIsList(!isList)}>{!isList ? 'View as list' : 'View as marquee'}</StyledToggleButton>}
            <StyledWhatIKnow>
                {
                !isList ?
                <Marquee speed={50} pauseOnHover={true}>
                    {data.map((item, index) => 
                        <WhatIKnowItem key={index} logo={item.logo} name={item.name} src={item.src} isCurrentlyUsing={item.isCurrentlyUsing} />
                    )}
                </Marquee> :
                <StyledWhatIKnowList>
                    {
                        (Object.keys(EWhatIKnowItemType) as Array<keyof typeof EWhatIKnowItemType>).map((key, index) => {
                            const whatIKnowTypeGroup = data.filter((wik) => wik.type === EWhatIKnowItemType[key]);
                            return whatIKnowTypeGroup.length > 0 && <WhatIKnowListGroupContainer key={index} title={EWhatIKnowItemType[key]} group={whatIKnowTypeGroup}/>
                        })
                    }
                </StyledWhatIKnowList>
                }
            </StyledWhatIKnow>
        </StyledCommonSection>
    )
}

export default WhatIKnow

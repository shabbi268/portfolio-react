import React from 'react'
import styled from 'styled-components';
import { Badge, Tooltip } from '@chakra-ui/react';
import { config, themeConfig } from '../../config';


const StyledWhatIKnowItem = styled.div`
    margin: 0 2em;
    position: relative;
    animation: fadeInUp 0.8s ease-out;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-15px) scale(1.08);
        filter: drop-shadow(0 15px 30px rgba(255, 140, 0, 0.3));
    }

    > img {
        width: 100px;
        opacity: 0.8;
        transition: all 0.3s ease;
        filter: grayscale(90%);
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        animation: float 3s ease-in-out infinite;

        &:hover {
            opacity: 1;
            filter: grayscale(0%);
            box-shadow: 0 8px 25px rgba(255, 140, 0, 0.2);
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
            transform: translateY(-8px);
        }
    }
`;

const StyledBadgeContainer = styled.div`
    position: absolute;
    top: .25em;
    left: .25em;
    z-index: 100;
    animation: pulse 2s ease-in-out infinite;

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.8;
            transform: scale(1.1);
        }
    }
`;

export enum EWhatIKnowItemType {
    COMPONENT_FRAMRWORKS_LIBRARIES = 'Component frameworks / libraries',
    TESTING_FRAMEWORKS = 'Testing frameworks',
    BACKEND = 'Backend',
    DATABASES = 'Databases',
    UI_STYLING = 'UI and Styling',
    UI_FRAMEWORKS = 'UI frameworks',
    LANGUAGES_SUPERSETS = 'Languages / Supersets',
}

export interface IWhatIKnowItem {
    logo: string;
    name: string;
    type?: EWhatIKnowItemType;
    isCurrentlyUsing?: boolean;
    src?: string;
}

const WhatIKnowItem = ({logo, name, isCurrentlyUsing = false, src}: IWhatIKnowItem) => {
    return (
        <StyledWhatIKnowItem>
            {isCurrentlyUsing && <StyledBadgeContainer>
                <Badge variant="solid" colorScheme="red">Using</Badge>
            </StyledBadgeContainer>}
            <Tooltip gutter={16} hasArrow label={name} bg={themeConfig[config.theme].darker} placement="top">
                <img src={src} alt={name} />   
            </Tooltip>
        </StyledWhatIKnowItem>
    )
}

export default WhatIKnowItem

import React from 'react'
import styled from 'styled-components';
import { config, themeConfig } from '../../config';


const StyledWhatIKnowItem = styled.div`
    margin: 0 2em;
    position: relative;
    animation: fadeInUp 0.8s ease-out;
    transition: all 0.3s ease;
    overflow: visible;
    z-index: 10;

    &:hover {
        transform: translateY(-15px) scale(1.12);
        filter: drop-shadow(0 20px 48px rgba(255, 140, 0, 0.4));
        z-index: 20;
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
            box-shadow: 0 12px 36px rgba(255, 140, 0, 0.35);
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
            <img title={name} src={src} alt={name} />   
        </StyledWhatIKnowItem>
    )
}

export default WhatIKnowItem

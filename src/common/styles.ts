import styled from '@emotion/styled'
import { config, themeConfig } from '../config';

interface IStyledCommonSectionsProps {
    backgroundUrl?: string;
}

interface IStyledBackgroundCoverProps {
    fadeAmount?: number;
}

export const StyledTitle = styled.div`
    color: ${themeConfig[config.theme].main};
    font-size: 25px;
    text-align: center;
    font-weight: 500;
    padding-bottom: 8px;
    margin-bottom: 8px;
    animation: fadeInUp 0.8s ease-out;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, transparent, ${themeConfig[config.theme].main}, transparent);
        border-radius: 2px;
    }
`;

export const StyledSecondaryTitle = styled.div`
    color: ${themeConfig[config.theme].main};
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    margin-top: 8px;
    margin-bottom: 8px;
    animation: fadeInUp 0.8s ease-out 0.2s both;
`;

export const StyledCommonSection = styled.div<IStyledCommonSectionsProps>`
    width: 100vw;
    padding: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: ${props => props.backgroundUrl ? `url('${props.backgroundUrl}')` : 'transparent'};
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    animation: fadeInUp 1s ease-out;
    border-top: 1px solid rgba(255, 140, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 0 0 30px rgba(255, 140, 0, 0.05);
    }
`;

export const StyledBackgroundCover = styled.div<IStyledBackgroundCoverProps>`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.90) 100%);
    opacity: ${props => props.fadeAmount ? 1 - (props.fadeAmount / 100) : 0.7};
    backdrop-filter: blur(1px);
`;

export const StyledBackgroundTopper = styled.div`
    position: relative;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

interface IStyledParagraphOverridePrpops {
    paddingTop?: number | string;
    paddingBottom?: number | string;
}

export const StyledParagraph = styled.p<IStyledParagraphOverridePrpops>`
    color: ${themeConfig[config.theme].darker};
    text-align: center;
    padding-top: ${props => `${props.paddingTop || 1}em`};
    padding-bottom: ${props => `${props.paddingBottom || 1}em`};
    animation: fadeInUp 0.8s ease-out 0.3s both;
    line-height: 1.6;
`;
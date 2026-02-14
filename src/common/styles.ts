import styled from '@emotion/styled'
import { config, themeConfig } from '../config';

interface IStyledCommonSectionsProps {
    backgroundUrl?: string;
    alternateBackground?: boolean;
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
    letter-spacing: 1px;

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
        animation: expandWidth 0.8s ease-out 0.3s both;
    }

    @keyframes expandWidth {
        from {
            width: 0;
            opacity: 0;
        }
        to {
            width: 60px;
            opacity: 1;
        }
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
    padding: 3em 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: ${props => {
        if (props.backgroundUrl) return `url('${props.backgroundUrl}')`;
        return props.alternateBackground ? 'linear-gradient(135deg, rgba(255, 140, 0, 0.05) 0%, rgba(35, 166, 213, 0.05) 100%)' : 'transparent';
    }};
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    animation: fadeInUp 1.2s ease-out;
    border-top: 1px solid rgba(255, 140, 0, 0.15);
    border-bottom: 1px solid rgba(255, 140, 0, 0.15);
    transition: all 0.4s ease;
    scroll-behavior: smooth;

    &:hover {
        box-shadow: inset 0 0 40px rgba(255, 140, 0, 0.08);
    }

    @media (max-width: 768px) {
        padding: 2em 1.5em;
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
    line-height: 1.8;
    max-width: 900px;
    margin: 0 auto;
    font-size: 16px;
    letter-spacing: 0.3px;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        font-size: 15px;
        line-height: 1.7;
    }
`;
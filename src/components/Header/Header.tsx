import styled from '@emotion/styled'
import React from 'react'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, StackOverflowIcon } from '../../common/icons'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'

interface IHeaderProps {
    data: {
        name: string;
        title: string;
        showProfilePic: boolean;
        cvLink: string | null;
        portfolioLink: string | null;
        learningBlog: string | null;
        linkedIn?: string;
        stackOverflow?: string;
        facebook?: string;
        instagram?: string;
        github?: string
    };
    modules: any[];
}

const StyledHeader = styled.div`
    width: 100vw;
    min-height: 50vh;
    padding-top: 1em;
    padding-bottom: 1em;
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.1) 0%, rgba(35, 166, 213, 0.1) 100%),
                url('https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 30% 50%, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 70% 50%, rgba(35, 166, 213, 0.1) 0%, transparent 50%);
        animation: headerPulse 8s ease-in-out infinite;
        pointer-events: none;
        will-change: opacity;
    }

    @keyframes headerPulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
    }
`;

const StyledStickyNavBar = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%);
    backdrop-filter: blur(10px);
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    z-index: 999;
    animation: slideDown 0.6s ease-out;
    transition: box-shadow 0.3s ease;
    border-bottom: 1px solid rgba(255, 140, 0, 0.1);

    &:hover {
        box-shadow: 0 8px 25px rgba(255, 140, 0, 0.15);
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-100%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        padding: 0.8em 1em;
        gap: 1em;
    }
`;

const StyledAvailabilityBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.1) 100%);
    border: 2px solid rgba(34, 197, 94, 0.4);
    padding: 0.6em 1.2em;
    border-radius: 50px;
    animation: fadeInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
    margin-bottom: 1.5em;
    position: relative;
    z-index: 10;
    will-change: transform, opacity;

    &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #22c55e;
        border-radius: 50%;
        animation: pulse 2s ease-in-out infinite;
        will-change: transform;
    }

    font-size: 14px;
    font-weight: 500;
    color: #166534;

    @keyframes pulse {
        0%, 100% { 
            transform: scale(1);
            opacity: 1;
        }
        50% { 
            transform: scale(1.2);
            opacity: 0.7;
        }
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translate3d(0, -30px, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
`;

const StyledName = styled.h1`
    color: #000;
    font-size: 50px;
    font-weight: 400;
    animation: fadeInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.26s both;
    text-shadow: 2px 2px 4px rgba(255, 140, 0, 0.2);
    position: relative;
    z-index: 10;
    will-change: transform, opacity;

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translate3d(0, -30px, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
`

const StyledWorkTitle = styled.h2`
    color: #000;
    font-size: 25px;
    font-weight: 200;
    animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.29s both;
    position: relative;
    z-index: 10;
    will-change: transform, opacity;

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
`;

const StyledSubtitle = styled.p`
    color: rgba(0, 0, 0, 0.7);
    font-size: 18px;
    font-weight: 300;
    max-width: 600px;
    margin-top: 1em;
    margin-bottom: 0.5em;
    line-height: 1.6;
    letter-spacing: 0.5px;
    animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.31s both;
    position: relative;
    z-index: 10;
    will-change: transform, opacity;

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    @media (max-width: 768px) {
        font-size: 16px;
        margin-top: 0.8em;
        padding: 0 1em;
    }
`;

const StyledStatsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3em;
    margin-top: 2em;
    margin-bottom: 1.5em;
    animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.33s both;
    position: relative;
    z-index: 10;
    flex-wrap: wrap;
    will-change: opacity;

    @media (max-width: 768px) {
        gap: 2em;
        margin-top: 1.5em;
    }

    @media (max-width: 480px) {
        gap: 1.5em;
    }
`;

const StyledStat = styled.div`
    text-align: center;
    
    .stat-number {
        font-size: 36px;
        font-weight: 700;
        background: linear-gradient(135deg, rgba(255, 140, 0, 0.9) 0%, rgba(35, 166, 213, 0.9) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.3em;
        display: block;
    }

    .stat-label {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    @media (max-width: 768px) {
        .stat-number {
            font-size: 28px;
        }
        
        .stat-label {
            font-size: 12px;
        }
    }
`;

const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    animation: fadeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.23s both, float 3s ease-in-out 0.23s infinite;
    box-shadow: 0 10px 30px rgba(255, 140, 0, 0.3);
    border: 4px solid rgba(255, 140, 0, 0.3);
    transition: all 0.3s ease;
    position: relative;
    z-index: 10;
    will-change: transform;

    &:hover {
        box-shadow: 0 15px 40px rgba(255, 140, 0, 0.5);
        border-color: rgba(255, 140, 0, 0.6);
        transform: scale(1.05);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translate3d(0, -30px, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
    }
`;

const StyledSocialLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5em;
    margin-bottom: 2em;
    position: relative;
    z-index: 10;
    animation: fadeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.35s both;
    gap: 1.5em;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 1em;
    will-change: opacity;
    
    > * {
        transition: all 0.3s ease;
        will-change: transform;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @media (max-width: 768px) {
        gap: 1em;
        margin-top: 1em;
    }
`;

const StyledButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    margin-top: 2.5em;
    margin-bottom: 1.5em;
    width: 100%;
    position: relative;
    z-index: 10;
    flex-wrap: wrap;
    padding: 0 1em;
    animation: fadeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.32s both;
    will-change: opacity;
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @media (max-width: 768px) {
        gap: 1em;
        margin-top: 2em;
    }
`;

const StyledButton = styled.button<{ $position?: 'left' | 'center' | 'right' }>`
    padding: 0.8em 1.5em;
    border: 2px solid rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #000;
    will-change: transform, opacity;
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    animation: ${props => {
        if (props.$position === 'left') return 'bounceFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.32s both';
        if (props.$position === 'right') return 'bounceFromRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.38s both';
        return 'bounceFromCenter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.35s both';
    }};
    
    @keyframes bounceFromLeft {
        0% {
            opacity: 0;
            transform: translate3d(-50px, 0, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
    
    @keyframes bounceFromCenter {
        0% {
            opacity: 0;
            transform: translate3d(0, 30px, 0) scale(0.9);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
        }
    }
    
    @keyframes bounceFromRight {
        0% {
            opacity: 0;
            transform: translate3d(50px, 0, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
    
    &:hover {
        background: rgba(255, 255, 255, 0.25);
        border-color: rgba(0, 0, 0, 0.6);
        transform: scale(1.12);
        box-shadow: 0 12px 32px rgba(255, 140, 0, 0.3);
    }

    &:focus {
        outline: 2px solid rgba(255, 140, 0, 0.6);
        outline-offset: 2px;
        box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.2);
    }

    &:active {
        transform: scale(1.08);
    }

    @media (max-width: 768px) {
        padding: 0.7em 1.2em;
        font-size: 13px;
        min-height: 40px;
        min-width: 40px;
    }
`;

const StyledSocialLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    min-width: 44px;
    min-height: 44px;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.2) 0%, rgba(35, 166, 213, 0.2) 100%);
    border: 2px solid rgba(255, 140, 0, 0.3);
    animation: slideUpFromBottom 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.35s both;
    will-change: transform;
    
    svg {
        width: 24px;
        height: 24px;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }
    
    &:hover {
        transform: translate3d(0, -5px, 0) scale(1.1);
        background: linear-gradient(135deg, rgba(255, 140, 0, 0.4) 0%, rgba(35, 166, 213, 0.4) 100%);
        border-color: rgba(255, 140, 0, 0.6);
        filter: drop-shadow(0 8px 15px rgba(255, 140, 0, 0.3));
    }

    &:focus {
        outline: 2px solid rgba(255, 140, 0, 0.6);
        outline-offset: 2px;
        box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.2);
    }
    
    @keyframes slideUpFromBottom {
        from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    @media (max-width: 768px) {
        width: 45px;
        height: 45px;
        min-width: 40px;
        min-height: 40px;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

const Header = ({data: {name, title, showProfilePic, cvLink, portfolioLink, learningBlog, linkedIn, stackOverflow, facebook, instagram, github}, modules}:IHeaderProps) => {
    return (
        <>
            <StyledStickyNavBar>
                <Navigation modules={modules} />
                <MobileMenu modules={modules} />
            </StyledStickyNavBar>
            <StyledHeader>
                <StyledAvailabilityBadge role="status" aria-live="polite" aria-label="Currently accepting project inquiries">🟢 Open to Projects</StyledAvailabilityBadge>
                {showProfilePic && <StyledImage src="./assets/profile.jpeg" />}
                <StyledName>{name}</StyledName>
                <StyledWorkTitle>{title}</StyledWorkTitle>
                <StyledSubtitle>Building secure, scalable, and high-performance web applications with modern architecture and best engineering practices</StyledSubtitle>
                <StyledStatsContainer>
                    <StyledStat>
                        <span className="stat-number">6+</span>
                        <span className="stat-label">Years Experience</span>
                    </StyledStat>
                    <StyledStat>
                        <span className="stat-number">12+</span>
                        <span className="stat-label">Projects</span>
                    </StyledStat>
                    <StyledStat>
                        <span className="stat-number">5+</span>
                        <span className="stat-label">Certifications</span>
                    </StyledStat>
                </StyledStatsContainer>
                <StyledButtonsContainer role="group" aria-label="Call-to-action buttons">
                {cvLink && <StyledButton $position="left" onClick={() => window.open(cvLink)} aria-label="Download resume in new window">📄 Resume</StyledButton>}
                {portfolioLink && <StyledButton $position="center" onClick={() => window.open(portfolioLink)} aria-label="View portfolio in new window">🎨 Portfolio</StyledButton>}
                {learningBlog && <StyledButton $position="right" onClick={() => window.open(learningBlog)} aria-label="Visit learning blog in new window">📚 My Learning Blog</StyledButton>}
                </StyledButtonsContainer>
                {(github || linkedIn || instagram || facebook || stackOverflow) && <StyledSocialLinks role="group" aria-label="Social media links">
                   {github && <StyledSocialLink href={github} target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="Visit GitHub profile (opens in new window)"><GithubIcon /></StyledSocialLink>}
                   {linkedIn && <StyledSocialLink href={linkedIn} target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="Visit LinkedIn profile (opens in new window)"><LinkedInIcon /></StyledSocialLink>}
                   {instagram && <StyledSocialLink href={instagram} target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Visit Instagram profile (opens in new window)"><InstagramIcon /></StyledSocialLink>}
                   {facebook && <StyledSocialLink href={facebook} target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Visit Facebook profile (opens in new window)"><FacebookIcon /></StyledSocialLink>}
                   {stackOverflow && <StyledSocialLink href={stackOverflow} target="_blank" rel="noopener noreferrer" title="Stack Overflow" aria-label="Visit Stack Overflow profile (opens in new window)"><StackOverflowIcon /></StyledSocialLink>}
                </StyledSocialLinks>}
            </StyledHeader>
        </>
    )
}

export default Header

import { Button, Link, theme } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, StackOverflowIcon } from '../../common/icons'
import { config, themeConfig } from '../../config'
import Navigation from './Navigation'

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
    }

    @keyframes headerPulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
    }
`

const StyledName = styled.h1`
    color: ${theme.colors.black};
    font-size: 50px;
    font-weight: 400;
    animation: fadeInDown 1s ease-out;
    text-shadow: 2px 2px 4px rgba(255, 140, 0, 0.2);
    position: relative;
    z-index: 10;

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

const StyledWorkTitle = styled.h2`
    color: ${theme.colors.black};
    font-size: 25px;
    font-weight: 200;
    animation: fadeInUp 1s ease-out 0.3s both;
    position: relative;
    z-index: 10;

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
`

const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    animation: float 3s ease-in-out infinite;
    box-shadow: 0 10px 30px rgba(255, 140, 0, 0.3);
    border: 4px solid rgba(255, 140, 0, 0.3);
    transition: all 0.3s ease;
    position: relative;
    z-index: 10;

    &:hover {
        box-shadow: 0 15px 40px rgba(255, 140, 0, 0.5);
        border-color: rgba(255, 140, 0, 0.6);
        transform: scale(1.05);
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
    }
`;

const StyledSocialLinks = styled.div`
    display: flex;
    margin-top: 2em;
    margin-bottom: 2em;
    position: relative;
    z-index: 10;
    animation: fadeInUp 1s ease-out 0.6s both;
    > * {
        margin: 0 1em;
        transition: all 0.3s ease;
        animation: fadeInUp 1s ease-out 0.7s both;

        &:hover {
            transform: translateY(-5px) scale(1.1);
            filter: drop-shadow(0 8px 15px rgba(255, 140, 0, 0.3));
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
`;


const Header = ({data: {name, title, showProfilePic, cvLink, portfolioLink, learningBlog, linkedIn, stackOverflow, facebook, instagram, github}, modules}:IHeaderProps) => {
    return (
        <StyledHeader>
            <Navigation modules={modules} />
            {showProfilePic && <StyledImage src="./assets/profile.jpeg" />}
            <StyledName>{name}</StyledName>
            <StyledWorkTitle>{title}</StyledWorkTitle>
            <div className="headerButtons">
            {cvLink && <Button className="" colorScheme="gray" style={{color: "black", border: "2px solid", margin: "6px"}} _hover={{color: themeConfig[config.theme].darker}} _pressed={{color: themeConfig[config.theme].darker}} onClick={() => window.open(cvLink)} mt="4" variant="outline" size="md">Resume</Button>}
            {portfolioLink && <Button colorScheme="gray" style={{color: "black", border: "2px solid", margin: "6px"}} _hover={{color: themeConfig[config.theme].darker}} _pressed={{color: themeConfig[config.theme].darker}} onClick={() => window.open(portfolioLink)} mt="4" variant="outline" size="md">Portfolio</Button>}
            {learningBlog && <Button colorScheme="gray" style={{color: "black", border: "2px solid", margin: "6px"}} _hover={{color: themeConfig[config.theme].darker}} _pressed={{color: themeConfig[config.theme].darker}} onClick={() => window.open(learningBlog)} mt="4" variant="outline" size="md">My Learning Blog</Button>}
            </div>
            {(github || linkedIn || instagram || facebook || stackOverflow) && <StyledSocialLinks>
               {github && <Link style={{backgroundColor: "black", borderRadius: "18px"}} href={github} isExternal={true}><GithubIcon /></Link>}
               {linkedIn && <Link style={{backgroundColor: "black", borderRadius: "8px"}} href={linkedIn} isExternal={true}><LinkedInIcon /></Link>}
               {instagram && <Link style={{backgroundColor: "black", borderRadius: "4px"}} href={instagram} isExternal={true}><InstagramIcon /></Link>}
               {facebook && <Link style={{backgroundColor: "black", borderRadius: "4px"}} href={facebook} isExternal={true}><FacebookIcon /></Link>}
               {stackOverflow && <Link style={{backgroundColor: "black", borderRadius: "4px"}} href={stackOverflow} isExternal={true}><StackOverflowIcon /></Link>}
            </StyledSocialLinks>}
        </StyledHeader>
    )
}

export default Header

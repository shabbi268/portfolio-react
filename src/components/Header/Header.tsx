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
    background: url('https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-position: 0%;
`

const StyledName = styled.h1`
    color: ${theme.colors.black};
    font-size: 50px;
    font-weight: 400;
`

const StyledWorkTitle = styled.h2`
    color: ${theme.colors.black};
    font-size: 25px;
    font-weight: 200;
`

const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

const StyledSocialLinks = styled.div`
    display: flex;
    margin-top: 2em;
    margin-bottom: 2em;
    > * {
        margin: 0 1em;
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

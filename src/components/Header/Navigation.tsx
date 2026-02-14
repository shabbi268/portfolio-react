import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import styled from 'styled-components';
import { config, themeConfig } from '../../config';

const StyledNavigationWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding-right: 2em;
`;

interface INavigationProps {
    modules: any[];
}

const Navigation = ({modules}: INavigationProps) => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsNavOpen(false)
        }
    }

    return (
        <StyledNavigationWrapper role="navigation" aria-label="Main navigation" onKeyDown={handleKeyDown}>
            <IconButton 
                aria-label="Open navigation menu" 
                icon={<HamburgerIcon />} 
                onClick={() => setIsNavOpen(true)} 
                display={{ md: "none" }}
                aria-expanded={isNavOpen}
            />
            {isNavOpen && <Drawer placement="left" isOpen={isNavOpen} onClose={() => setIsNavOpen(false)}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">Shabarish Kesa</DrawerHeader>
                <DrawerBody role="menu">
                    {modules.map((module, index) => <Button 
                        as="a" 
                        href={`#module-${index}`} 
                        onClick={() => setIsNavOpen(false)} 
                        colorScheme={themeConfig[config.theme].color} 
                        variant="ghost" 
                        css={{display: 'flex', width: '100%'}} 
                        my={4}
                        role="menuitem"
                        aria-label={`Go to ${module.title} section`}
                    >{module.title}</Button>)}
                </DrawerBody>
                </DrawerContent>
            </Drawer>}
        </StyledNavigationWrapper>
    )
}

export default Navigation

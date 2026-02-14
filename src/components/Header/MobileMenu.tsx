import React, { useState } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

const StyledHamburgerContainer = styled.div`
    display: none;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 140, 0, 0.1);
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

const StyledHamburgerLine = styled.div<{ $isOpen?: boolean; $lineIndex?: number }>`
    width: 24px;
    height: 2.5px;
    background: #000;
    border-radius: 2px;
    transition: all 0.3s ease;

    ${props => {
        if (!props.$isOpen) return '';
        
        if (props.$lineIndex === 0) {
            return `
                transform: rotate(45deg) translate(8px, 8px);
            `;
        } else if (props.$lineIndex === 1) {
            return `
                opacity: 0;
            `;
        } else if (props.$lineIndex === 2) {
            return `
                transform: rotate(-45deg) translate(7px, -7px);
            `;
        }
    }}
`;

const StyledMobileMenu = styled.div<{ $isOpen?: boolean }>`
    display: none;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.96) 100%);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    z-index: 998;
    max-height: ${props => props.$isOpen ? '100vh' : '0'};
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.4s ease;
    opacity: ${props => props.$isOpen ? 1 : 0};

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

const StyledMobileNavContent = styled.div`
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;

    a, button {
        padding: 12px 16px;
        border-radius: 6px;
        border: none;
        background: rgba(255, 140, 0, 0.1);
        color: #000;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        text-align: left;
        font-weight: 500;

        &:hover, &:focus {
            background: rgba(255, 140, 0, 0.2);
            outline: 2px solid rgba(255, 140, 0, 0.5);
            outline-offset: 2px;
        }

        &:focus {
            box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.2);
        }
    }

    @media (max-width: 480px) {
        padding: 1em;
        gap: 0.8em;

        a, button {
            padding: 10px 12px;
            font-size: 14px;
        }
    }
`;

interface IMobileMenuProps {
    modules: any[]
}

const MobileMenu: React.FC<IMobileMenuProps> = ({ modules }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <>
            <StyledHamburgerContainer
                onClick={() => setIsOpen(!isOpen)}
                role="button"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                tabIndex={0}
                onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setIsOpen(!isOpen)
                    }
                }}
            >
                <StyledHamburgerLine $isOpen={isOpen} $lineIndex={0} />
                <StyledHamburgerLine $isOpen={isOpen} $lineIndex={1} />
                <StyledHamburgerLine $isOpen={isOpen} $lineIndex={2} />
            </StyledHamburgerContainer>

            <StyledMobileMenu $isOpen={isOpen} role="navigation" aria-label="Mobile menu">
                <StyledMobileNavContent>
                    {modules.map((module, index) => (
                        <a
                            key={index}
                            href={`#${module.type}`}
                            onClick={handleLinkClick}
                            role="menuitem"
                        >
                            {module.title}
                        </a>
                    ))}
                </StyledMobileNavContent>
            </StyledMobileMenu>
        </>
    )
}

export default MobileMenu

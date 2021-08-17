import React from 'react'
import styled from 'styled-components';
import { Button, Link, theme } from '@chakra-ui/react';
import { config, themeConfig } from '../../config';

export interface ICertificationItemProps {
    title: string;
    src: string;
    year?: string;
}

const StyledCertificationItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    h3 {
        font-size: 18px;
        margin-bottom: .5em;
        font-weight: 600;
    }
    span {
        font-size: 15px;
        text-align: center;
    }
`;

const CertificationItem = ({title, year, src}: ICertificationItemProps) => {
    return (
        <StyledCertificationItem style={{border: "solid 2px white", borderRadius: "5px", padding: "5px"}}>
            <h3 style={{fontWeight: 800}}>{title}</h3>
            <span>{year}</span>
            <span>
                {src && <Button className="" colorScheme="gray" style={{fontSize: "14px", border: "2px solid", margin: "6px"}} _hover={{color: themeConfig[config.theme].darker}} _pressed={{color: themeConfig[config.theme].darker}} onClick={() => window.open(src)} mt="4" variant="outline" size="md">See Credential</Button>}
            </span>
        </StyledCertificationItem>


)
}

export default CertificationItem

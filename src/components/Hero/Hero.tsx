import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import React from 'react';
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_MOBILE } from '../../constants';
import axios from 'axios';

function Hero() {
     
    return (
        <Flex 
            mt={{ base: `${NAVBAR_HEIGHT_MOBILE}px`, lg: `${NAVBAR_HEIGHT}px` }}
            bg="#abd1c6" 
            w="100%"
            p={10} 
            justifyContent="center"
            alignItems="center"
            color="#001e1d"
            direction={{ base: 'column-reverse', lg: 'row' }}
            id="home"
            gap={20}
        >
            <Flex w="1/2" direction="column" fontWeight="bold" textAlign="left" paddingY={150}>
                <Text fontSize="3xl">
                    - Hello 👋🏻
                </Text>
                <Text fontSize="6xl">
                    I'm <span style={{color: "#e16162", marginRight:"16px"}}>Poorvi</span>
                    Vaish
                </Text>
                <Text> Full-Stack Web Developer based in India</Text>
                <a href="https://drive.google.com/file/d/1CWyItbyRHNGJjk3YJBpY8xN_yh4JBW3C/view?usp=sharing" target='_blank'>
                <Button mt="10" alignSelf="left" w="48" bg="#e16162" color="white" variant="solid" _hover={{bg: "#004643"}}> Resume</Button>
                </a>
            </Flex>
            <Flex w="1/2" alignItems="center" >
                <Image src = "https://i.imgur.com/xf3tZD3.jpg" alt="hero" borderRadius='full'/>
            </Flex>
        </Flex>
    )
}

export default Hero
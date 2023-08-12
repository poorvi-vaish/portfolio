import React from "react";
import { Text, Flex, Box, Image } from "@chakra-ui/react";
import Skills from "./skills";

function Tech() {
    return (
        <Flex direction="column" 
        w="full"
        pos="relative"
        p="20"
        align={{ base: 'center', lg: 'center' }}
        >
            <Box position="absolute" top="0" left="0" w="full" h="full" bg="#abd1c6"  zIndex={-1} >
            {/* <Image src = "https://i.imgur.com/0edYhZw.png"  alt="hero" w="full" h="full" objectFit="cover" /> */}
            </Box>
            <Text fontSize="5xl" fontWeight="black" color="#001e1d" py="10" pt="0" zIndex={1} >Tech Toolbox: My Expertise and Skills</Text>

            <Flex direction="row" flexWrap="wrap" justifyContent="center" gap="8" zIndex={1} w="70%">
                {
                    Skills.map((skill, index) => (
                        <Flex direction="column" alignItems="center" justifyContent="center"  key={index}>
                             {skill.icon && <skill.icon size="4rem" color={skill.color}  title={skill.name} border="#001e1d" />}
                        </Flex>
                    ))
                }
            </Flex>

        </Flex>
    );
}

export default Tech;
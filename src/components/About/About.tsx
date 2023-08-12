import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function About(){

    return(
        <Flex direction="column" alignItems="center"  bg="#e8e4e6" 
        p="10"
        id="about_me"
        >
            <Text fontSize="4xl" fontWeight="black" color="#001e1d" >About Me</Text>
            <Text fontSize="lg" w="60%" py="10" textAlign="center" color="#0f3433">Hey there, welcome to my little corner of the web! I'm a Full Stack Developer with a passion for crafting digital wonders. Imagine typing lines of code that turn into vibrant, functional websites – that's my kind of magic!</Text>
            <Text fontSize="lg" w="70%" textAlign="center" color="#0f3433">But hey, I'm not all bits and bytes. I've led events and designed posters as part of the Abhigyan Abhikaushalam Students'Forum and IEEE Student Branch. 
            My toolkit includes JavaScript, TypeScript, and more cool stuff. React.js and Next.js are my trusty sidekicks. Apart from my geeky side, I'm into visualising the fictional characters from different novels and hum the songs as the best singer ever!</Text>
            <Text fontSize="lg" w="70%" textAlign="center" py="10" color="#0f3433">So, are you ready to step into my digital realm? Dive into my projects, peek behind the code curtain, and drop me a line if you're up for some tech talk. Thanks for swinging by – let's embark on this coding adventure while grooving to the beats of life!</Text>
        </Flex>
    )
}
export default About;
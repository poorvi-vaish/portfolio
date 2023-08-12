import { Flex, Text, Box, VStack, Image, Divider, Button, Link, Tag, TagLabel} from "@chakra-ui/react";
import React from "react";
import ProjectsData from "./projects";
import { SiGithub, SiGlobus } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";


function Projects() {
  return (
    <Flex direction="column" alignItems="center" justify="center"  bg="#e8e4e6" 
        p="10"
        id="projects"
        zIndex={1}
        >
    <Flex w="80%" gap= "4" align="center" color="#e16162">
        <Text fontWeight="bold" fontSize="3xl" w={{base:"100%",xl:"30%"}}>
          My Projects/ Learnings
        </Text>
        <Divider borderWidth="thin" border="1px" display={{base:"none", lg:"block"}}/>
      </Flex>
      <Flex direction="column" gap="20" p="10" w="80%" justify="center" align="center">
    {
        ProjectsData.map((project, index) => (
          <Flex w="100%" gap="20" justify="space-between" align="center" key={project.id} direction={{ base: "column" , lg:`${index % 2 === 1 ? 'row-reverse' : 'row'}`}}>
          <Box width={{base:500, lg:1000}} height={300} aspectRatio="square" borderRadius="2xl" boxShadow="md" _hover={{boxShadow:"10px 10px 37px -3px #004643"}} cursor="pointer">
            <Image
              src={project.image}
              alt={project.image}
              width="full"
              height="full"
              borderRadius="2xl"
              objectFit="cover"
            />
          </Box>
          <VStack w="100%" align="center" textAlign="center">
            <Text fontWeight="bold" fontSize="4xl" >
              {project.title}
            </Text>
            <Text fontSize="md">
              {project.description}
            </Text>
            <Flex direction="row" flexWrap="wrap" justifyContent="center" gap="4" zIndex={1} w="100%" py="4">
                {
                    project.tech?.map((skill, index) => (
                        <Flex direction="column" alignItems="center" justifyContent="center"  key={index}>
                             {skill.icon && <skill.icon size="2rem" color={skill.color} title={skill.name} />}
                        </Flex>
                    ))
                }
            </Flex>
            {
              project.tag && <Tag size="md"       borderRadius='md'
              variant="solid"
              bg="#e0234e"
              > <TagLabel>{project.tag}</TagLabel> </Tag>
            }
            <Flex direction="row" justifyContent="center" alignItems="center" gap="4" zIndex={1} w="100%">
                {project.github && <Link href={project.github} target="_blank">
                  <Button mt="10" alignSelf="left" w="56" bg="#e16162" color="white" variant="solid" _hover={{bg: "#004643", boxShadow:"lg"}} gap="2"> View Project <SiGithub color="white"/></Button></Link>}
                  {
                    project.demo && <Link href={project.demo} target="_blank">
                    <Button mt="10" alignSelf="left" w="56" bg="#e16162" color="white" variant="solid" _hover={{bg: "#004643", boxShadow:"lg"}} gap="2"> Visit <FaExternalLinkAlt/></Button></Link>
                  }
            </Flex>
           
          </VStack>

        </Flex>
        ))
    }
    
</Flex>
</Flex>
  );
}

export default Projects;
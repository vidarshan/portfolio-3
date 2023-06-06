import React, { FC, useState } from "react";
import { IProjectPage } from "../interfaces/IProjectPage";
import { ProjectPageContainer } from "../styles/pages/ProjectPage";
import {
  ActionIcon,
  Badge,
  Card,
  Center,
  Flex,
  Grid,
  Group,
  Image,
  SegmentedControl,
  Spoiler,
  Text,
  Box,
} from "@mantine/core";
import { BiLinkExternal, BiMobileAlt } from "react-icons/bi";
import { GrProjects, GrList } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { projects } from "../data/projects";
import f from "../images/placeholder.png";
import { useMediaQuery } from "@mantine/hooks";
import { projectsArchive } from "../data/projectArchive";

const ProjectPage: FC<IProjectPage> = ({ id }) => {
  const [selectedSegment, setSelectedSegment] = useState("projects");
  const largeScreen = useMediaQuery("(min-width: 700px)");
  return (
    <ProjectPageContainer id={id}>
      <Text size={32} weight={700}>
        Projects
      </Text>
      <Box sx={{ marginBottom: 30 }}>
        <SegmentedControl
          radius="xl"
          value={selectedSegment}
          onChange={(e) => setSelectedSegment(e)}
          transitionTimingFunction="linear"
          mt={50}
          data={[
            {
              value: "projects",
              label: (
                <Center>
                  <GrProjects size="1rem" />
                  <Box ml={10}>Projects</Box>
                </Center>
              ),
            },
            {
              value: "archive",
              label: (
                <Center>
                  <GrList size="1rem" />
                  <Box ml={10}>Projects Archive</Box>
                </Center>
              ),
            },
          ]}
        />
      </Box>
      {selectedSegment === "projects" ? (
        <Grid gutter={60}>
          {projects.map((project) => {
            return (
              <Grid.Col key={project.id} xs={12} sm={6} md={6} lg={6} xl={6}>
                <Card padding="sm" radius="lg" shadow="md">
                  <Card.Section sx={{ position: "relative" }}>
                    <ActionIcon
                      sx={{
                        position: "absolute",
                        zIndex: 1000,
                        right: 8,
                        top: 8,
                      }}
                      color="gray"
                      variant="filled"
                      radius="xl"
                      size="lg"
                    >
                      <BiMobileAlt />
                    </ActionIcon>
                    <ActionIcon
                      sx={{
                        position: "absolute",
                        zIndex: 1000,
                        right: 40,
                        top: 8,
                        marginRight: 10,
                      }}
                      color="teal"
                      variant="filled"
                      radius="xl"
                      size="lg"
                    >
                      <SiGithub />
                    </ActionIcon>
                    <Image src={project.image} height={300} alt="Norway" />
                  </Card.Section>
                  <Group position="apart" mt="md" mb="xs">
                    <Text td="underline" size={16} weight={700}>
                      {project.name}
                    </Text>
                    <Badge color="pink" variant="light" radius="xl">
                      {project.tags}
                    </Badge>
                  </Group>
                  <Group position="apart" mt="md" mb="xs">
                    <Spoiler
                      maxHeight={90}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      <Text align="justify" weight={500} size={14}>
                        {project.description}
                      </Text>
                    </Spoiler>
                  </Group>
                  <Group mt={30}>
                    {project.technologies.map((tech) => {
                      return (
                        <Badge
                          key={tech.id}
                          color={tech.color}
                          size="xs"
                          variant="filled"
                          radius="xl"
                        >
                          {tech.name}
                        </Badge>
                      );
                    })}
                  </Group>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      ) : (
        <>
          {projectsArchive.map((archived) => {
            return (
              <Card radius="lg" withBorder mb={20}>
                <Flex direction={largeScreen ? "row" : "column"}>
                  <Flex direction="column" justify="center">
                    <Image
                      src={archived.image}
                      height={80}
                      width={160}
                      alt="Norway"
                      radius="sm"
                    />
                  </Flex>
                  <Flex sx={{ width: "100%" }} align="center">
                    <Flex
                      direction={largeScreen ? "row" : "column"}
                      align={largeScreen ? "center" : "flex-start"}
                      justify="space-between"
                      sx={{ width: "100%" }}
                      ml={largeScreen ? 26 : 0}
                    >
                      <Flex direction="column">
                        <Flex direction="column">
                          <Text
                            weight={800}
                            sx={{ marginTop: largeScreen ? 0 : 5 }}
                          >
                            {archived.name}
                          </Text>{" "}
                          <Text
                            sx={{ marginTop: largeScreen ? 0 : 5 }}
                            align="justify"
                            weight={500}
                          >
                            {archived.description}
                          </Text>{" "}
                        </Flex>

                        <Flex direction="column" mt={10}>
                          <Group>
                            {archived.technologies.map((tech) => {
                              return (
                                <Badge
                                  key={tech.id}
                                  color={tech.color}
                                  size="sm"
                                  variant="filled"
                                  radius="xl"
                                >
                                  {tech.name}
                                </Badge>
                              );
                            })}
                          </Group>
                        </Flex>
                      </Flex>

                      <Flex
                        justify="flex-start"
                        sx={{
                          marginLeft: largeScreen ? 40 : 0,
                          marginTop: largeScreen ? 0 : 10,
                        }}
                      >
                        <ActionIcon
                          mr={10}
                          color="teal"
                          variant="filled"
                          radius="lg"
                          size="lg"
                        >
                          <BiLinkExternal />
                        </ActionIcon>
                        <ActionIcon
                          mr={10}
                          color="gray"
                          variant="filled"
                          radius="xl"
                          size="lg"
                        >
                          <SiGithub />
                        </ActionIcon>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
            );
          })}
        </>
      )}
    </ProjectPageContainer>
  );
};

export default ProjectPage;

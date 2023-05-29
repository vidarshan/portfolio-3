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
        <Grid gutter={40}>
          {projects.map((project) => {
            return (
              <Grid.Col key={project.id} xs={12} sm={6} md={6} lg={6} xl={6}>
                <Card padding="sm" radius="lg" withBorder>
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
                    <Image src={f} height={300} alt="Norway" />
                  </Card.Section>
                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={700}>{project.name}</Text>
                    <Badge color="pink" variant="filled" radius="xl">
                      {project.tags}
                    </Badge>
                  </Group>
                  <Group position="apart" mt="md" mb="xs">
                    <Spoiler
                      maxHeight={120}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      <Text weight={500} size={16}>
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
                          size="sm"
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
        <Card radius="lg" withBorder>
          <Flex direction={largeScreen ? "row" : "column"}>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={80}
              width={160}
              alt="Norway"
              radius="sm"
            />
            <Flex sx={{ width: "100%" }} align="center">
              <Flex
                direction={largeScreen ? "row" : "column"}
                align={largeScreen ? "center" : "flex-start"}
                justify="space-between"
                sx={{ width: "100%" }}
                ml={largeScreen ? 26 : 0}
              >
                <Flex direction="column">
                  <Text weight={800} sx={{ marginTop: largeScreen ? 0 : 5 }}>
                    Find my stay
                  </Text>{" "}
                  <Text
                    sx={{ marginTop: largeScreen ? 0 : 5 }}
                    align="justify"
                    weight={500}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima mollitia ullam, molestias corporis odio quisquam
                    repellat eius qui saepe? Aut explicabo facere magni iusto
                    amet modi aspernatur quisquam odit voluptates molestiae
                    totam
                  </Text>{" "}
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
      )}
    </ProjectPageContainer>
  );
};

export default ProjectPage;

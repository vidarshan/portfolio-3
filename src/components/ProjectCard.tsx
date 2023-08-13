import {
  ActionIcon,
  Badge,
  Card,
  Grid,
  Group,
  Spoiler,
  Text,
  Image,
  Flex,
  Tooltip,
} from "@mantine/core";
import { motion } from "framer-motion";
import { FC } from "react";
import { BiGlobe, BiMobileAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { item } from "../animations";
import { IProjectCard } from "../interfaces/IProjectCard";
import { useMediaQuery } from "@mantine/hooks";
import { IDetail } from "../interfaces/IWorkItem";

const ProjectCard: FC<IProjectCard> = ({
  id,
  type,
  repo,
  tags,
  demo,
  image,
  name,
  description,
  technologies,
}) => {
  const largeScreen = useMediaQuery("(min-width: 700px)");
  const onProjectOpen = (tag: string, name: string, url: string) => {
    if (tag === "Mobile") {
      window.open(url, name, "resizable=0,width=441,height=899");
    } else {
      window.open(url, "_blank");
    }
  };

  const onProjectRepo = (url: string) => {
    if (url !== "no-repo") {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      {type === "project" ? (
        <Grid.Col key={id} xs={12} sm={6} md={6} lg={6} xl={6}>
          <motion.div style={{ height: "100%" }} variants={item}>
            <Card padding="sm" radius="lg" shadow="md" withBorder>
              <Card.Section sx={{ position: "relative" }}>
                <Tooltip label="View Repo" withArrow>
                  <ActionIcon
                    sx={{
                      position: "absolute",
                      zIndex: 1000,
                      right: 40,
                      top: 8,
                      marginRight: 10,
                    }}
                    color="indigo"
                    variant="light"
                    radius="md"
                    size="lg"
                    onClick={() => onProjectRepo(repo)}
                  >
                    <BsGithub />
                  </ActionIcon>
                </Tooltip>
                <Tooltip
                  label={tags === "Mobile" ? "Open Preview" : "Open Project"}
                  withArrow
                >
                  <ActionIcon
                    sx={{
                      position: "absolute",
                      zIndex: 1000,
                      right: 8,
                      top: 8,
                    }}
                    color="teal"
                    variant="light"
                    radius="md"
                    size="lg"
                    onClick={() => onProjectOpen(tags, name, demo)}
                  >
                    {tags === "Mobile" ? <BiMobileAlt /> : <BiGlobe />}
                  </ActionIcon>
                </Tooltip>

                <Image src={image} height={300} alt="project-img" />
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text tt="uppercase" size={16} weight={700}>
                  {name}
                </Text>
                <Badge
                  color={
                    tags === "Full-stack"
                      ? "orange"
                      : tags === "Mobile"
                      ? "grape"
                      : "gray"
                  }
                  variant="light"
                  radius="sm"
                >
                  {tags}
                </Badge>
              </Group>
              <Group position="apart" mt="md" mb="xs">
                <Spoiler maxHeight={90} showLabel="Show more" hideLabel="Hide">
                  <Text align="justify" weight={500} size={14}>
                    {description}
                  </Text>
                </Spoiler>
              </Group>
              <Group mt={30}>
                {(technologies || []).map((tech: IDetail) => {
                  return (
                    <Badge
                      key={tech.id}
                      color={tech.color}
                      size="md"
                      variant="filled"
                      radius="sm"
                    >
                      {tech.name}
                    </Badge>
                  );
                })}
              </Group>
            </Card>
          </motion.div>
        </Grid.Col>
      ) : (
        <motion.div variants={item}>
          <Card radius="lg" shadow="md" withBorder mb={20}>
            <Flex direction={largeScreen ? "row" : "column"}>
              <Flex direction="column" justify="center">
                <Image
                  src={image}
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
                        tt="uppercase"
                        size={16}
                        weight={700}
                        sx={{ marginTop: largeScreen ? 0 : 5 }}
                        mb={10}
                      >
                        {name}
                      </Text>{" "}
                      <Text
                        sx={{ marginTop: largeScreen ? 0 : 5 }}
                        align="justify"
                        weight={500}
                        size={14}
                      >
                        {description}
                      </Text>{" "}
                    </Flex>

                    <Flex direction="column" mt={10}>
                      <Group>
                        {(technologies || []).map((tech: IDetail) => {
                          return (
                            <Badge
                              key={tech.id}
                              color={tech.color}
                              size="sm"
                              variant="filled"
                              radius="sm"
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
                    <Tooltip label="View Demo" position="bottom" withArrow>
                      <ActionIcon
                        mr={10}
                        color="teal"
                        variant="light"
                        radius="md"
                        size="lg"
                        onClick={() => onProjectOpen(tags, name, demo)}
                      >
                        <BiGlobe />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip label="View Repo" position="bottom" withArrow>
                      <ActionIcon
                        mr={10}
                        color="indigo"
                        variant="light"
                        radius="md"
                        size="lg"
                        disabled={repo === "no-repo"}
                        onClick={() => onProjectRepo(repo)}
                      >
                        <BsGithub />
                      </ActionIcon>
                    </Tooltip>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;

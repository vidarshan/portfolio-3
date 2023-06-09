import { FC, useRef } from "react";
import { IAboutPage } from "../interfaces/IAboutPage";
import {
  AboutPageContainer,
  GithubIconContainer,
  GithubText,
  StackOverflowContainer,
} from "../styles/pages/AboutPage";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Box,
  Card,
  ColorScheme,
  CopyButton,
  Divider,
  Flex,
  Group,
  HoverCard,
  Text,
  Tooltip,
  Button,
} from "@mantine/core";
import { SiStackoverflow, SiMaildotru } from "react-icons/si";
import { useLocalStorage, useMediaQuery } from "@mantine/hooks";
import { ImQuotesLeft } from "react-icons/im";
import { motion, useInView } from "framer-motion";
import { container, item } from "../animations";
import { useAppSelector } from "../store/store";
import { BiCheck, BiCopy, BiMedal, BiTrophy } from "react-icons/bi";
import { FiDownloadCloud } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  cvLink,
  githubLink,
  linkedInLink,
  stackoverflowLink,
  technicalCompetencies,
  technologies,
} from "../data/data";

const AboutPage: FC<IAboutPage> = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const largeScreen = useMediaQuery("(min-width: 700px)");
  const { stackoverflow } = useAppSelector((state) => state.stats);
  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const onEmailOpen = () => {
    window.location.assign(`mailto:${process.env.REACT_APP_USER_EMAIL}`);
  };

  const onExternalOpen = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <AboutPageContainer id={id}>
      <Text size={32} weight={700}>
        About Me
      </Text>
      <Card sx={{ marginTop: 30 }} radius="lg" shadow="lg" withBorder>
        <Flex
          ref={ref}
          sx={{
            marginBottom: 10,
          }}
          align={largeScreen ? "center" : "flex-start"}
          justify="space-between"
          direction={largeScreen ? "row" : "column"}
        >
          <Flex align="center">
            <Avatar
              variant="filled"
              radius="xl"
              size="md"
              color="teal"
              src="https://res.cloudinary.com/dury4s2jk/image/upload/v1683982446/myimage.81659e40_mmklpi.webp"
            />
            <Flex sx={{ marginLeft: 10 }} direction="column">
              <Text size={16} weight={800}>
                Vidarshan R.
              </Text>
              <Text size={12} weight={600}>
                Software Engineer
              </Text>
              <Text size={12} weight={600}>
                Computing Graduate
              </Text>
            </Flex>
          </Flex>
          <Flex
            sx={{
              marginLeft: largeScreen ? 10 : 0,
              marginTop: largeScreen ? 0 : 10,
            }}
            direction="row"
            align="center"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Group>
                <motion.div variants={item}>
                  <Tooltip label="Download resume" withArrow>
                    <ActionIcon
                      color="green"
                      radius="md"
                      variant="light"
                      size="lg"
                      onClick={() => onExternalOpen(cvLink)}
                    >
                      <FiDownloadCloud />
                    </ActionIcon>
                  </Tooltip>
                </motion.div>
                <motion.div variants={item}>
                  <HoverCard width={280} shadow="md" withArrow>
                    <HoverCard.Target>
                      <ActionIcon
                        color="red"
                        radius="md"
                        variant="light"
                        size="lg"
                        onClick={() => onEmailOpen()}
                      >
                        <SiMaildotru />
                      </ActionIcon>
                    </HoverCard.Target>
                    <HoverCard.Dropdown
                      style={{
                        backgroundColor:
                          colorScheme === "dark" ? "#fff" : "#000",
                        color: "white",
                        fontWeight: 600,
                      }}
                    >
                      <Text
                        size="sm"
                        color={colorScheme === "dark" ? "#000" : "#fff"}
                      >
                        Mail directly to my inbox with the following email.
                      </Text>
                      <Flex direction="row" justify="flex-end">
                        <CopyButton
                          value={process.env.REACT_APP_USER_EMAIL || ""}
                        >
                          {({ copied, copy }) => (
                            <Button
                              size="xs"
                              variant="white"
                              color={copied ? "teal" : "blue"}
                              onClick={copy}
                              leftIcon={
                                <>{copied ? <BiCheck /> : <BiCopy />}</>
                              }
                            >
                              {copied ? "Copied" : "Copy email"}
                            </Button>
                          )}
                        </CopyButton>
                      </Flex>
                    </HoverCard.Dropdown>
                  </HoverCard>
                </motion.div>
                <motion.div variants={item}>
                  <Tooltip label="Linkedin" withArrow>
                    <ActionIcon
                      color="blue"
                      radius="md"
                      variant="light"
                      size="lg"
                      onClick={() => onExternalOpen(linkedInLink)}
                    >
                      <BsLinkedin />
                    </ActionIcon>
                  </Tooltip>
                </motion.div>
                <motion.div variants={item}>
                  <Tooltip label="Github" withArrow>
                    <ActionIcon
                      radius="md"
                      variant="light"
                      size="lg"
                      onClick={() => onExternalOpen(githubLink)}
                    >
                      <BsGithub />
                    </ActionIcon>
                  </Tooltip>
                </motion.div>
                <motion.div variants={item}>
                  <HoverCard width={280} shadow="md" withArrow>
                    <HoverCard.Target>
                      <StackOverflowContainer
                        color={colorScheme === "dark" ? true : false}
                      >
                        <ActionIcon
                          color="orange"
                          radius="md"
                          variant="light"
                          size="lg"
                        >
                          <SiStackoverflow />
                        </ActionIcon>
                        <GithubIconContainer>
                          <BiTrophy
                            color={
                              colorScheme === "dark" ? "#ffd8a8" : "#fd7e14"
                            }
                          />
                        </GithubIconContainer>
                        <GithubText
                          color={colorScheme === "dark" ? false : true}
                        >
                          {stackoverflow.gold}
                        </GithubText>
                        <GithubIconContainer>
                          <BiMedal
                            color={
                              colorScheme === "dark" ? "#ffd8a8" : "#fd7e14"
                            }
                          />
                        </GithubIconContainer>
                        <GithubText
                          color={colorScheme === "dark" ? false : true}
                        >
                          {stackoverflow.gold}
                        </GithubText>
                        <GithubIconContainer>
                          <BiMedal
                            color={
                              colorScheme === "dark" ? "#ffd8a8" : "#fd7e14"
                            }
                          />
                        </GithubIconContainer>
                        <GithubText
                          color={colorScheme === "dark" ? false : true}
                        >
                          {stackoverflow.silver}
                        </GithubText>
                        <GithubIconContainer>
                          <BiMedal
                            color={
                              colorScheme === "dark" ? "#ffd8a8" : "#fd7e14"
                            }
                          />
                        </GithubIconContainer>
                        <GithubText
                          color={colorScheme === "dark" ? false : true}
                        >
                          {stackoverflow.bronze}
                        </GithubText>
                      </StackOverflowContainer>
                    </HoverCard.Target>
                    <HoverCard.Dropdown
                      style={{
                        backgroundColor:
                          colorScheme === "dark" ? "#fff" : "#000",
                        color: "white",
                        fontWeight: 600,
                      }}
                    >
                      <Text
                        size="sm"
                        color={colorScheme === "dark" ? "#000" : "#fff"}
                      >
                        My Stackoverflow reputation, gold, silver, and bronze
                        medial I've aquired through my interactions with their
                        site.
                      </Text>
                      <Flex direction="row" justify="flex-end">
                        <Anchor
                          color="cyan"
                          href={stackoverflowLink}
                          target="_blank"
                        >
                          View Account
                        </Anchor>
                      </Flex>
                    </HoverCard.Dropdown>
                  </HoverCard>
                </motion.div>
              </Group>
            </motion.div>
          </Flex>
        </Flex>
        <Divider />
        <Box mt={10} mb={10}>
          <Blockquote icon={<ImQuotesLeft color="#c2c2c2" />} cite="">
            <Text size={15} weight={500}>
              I'm a Software Engineer who likes to see things being built one
              line of code at a time. Well organised and prefers to have
              incremental self-development based on the knowledge gained. <br />
              <br /> I have nearly 3 years of industry experience, and I am
              gaining more knowledge day-by-day, as I am a quick learner who
              likes to implement and make use of the knowledge gained, in order
              to create great things.
              <br />
              <br /> I'm currently working with javascript and typescript based
              frameworks such as React, React Native, Node JS, Express JS and
              much more. I'm also working with Swift and iOS related development
              tools.
              <br />
              <br /> My goal is to create high quality software products written
              with quality code and based on unique ideas, which will have a
              positive impact and make positive changes in the day-to-day lives
              of people. <br />
              <br />
              I'm also working towards my target of becoming a great software
              engineer among the best software engineers."
            </Text>
          </Blockquote>
        </Box>
        <Divider />
        <Text sx={{ marginTop: 20 }} size="sm" weight={700}>
          Technical Competencies
        </Text>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Group sx={{ marginTop: 10, marginBottom: 20 }}>
            {technicalCompetencies.map((technology) => {
              return (
                <motion.div variants={item}>
                  <Badge
                    key={technology.id}
                    color={technology.color}
                    size="md"
                    radius="sm"
                    variant="filled"
                  >
                    {technology.name}
                  </Badge>
                </motion.div>
              );
            })}
          </Group>
        </motion.div>
        <Text sx={{ marginTop: 30 }} size="sm" weight={700}>
          Tools
        </Text>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Group sx={{ marginTop: 10, marginBottom: 20 }}>
            {technologies.map((technology) => {
              return (
                <motion.div variants={item}>
                  <Badge
                    key={technology.id}
                    color={technology.color}
                    size="md"
                    radius="sm"
                    variant="filled"
                  >
                    {technology.name}
                  </Badge>
                </motion.div>
              );
            })}
          </Group>
        </motion.div>
      </Card>
    </AboutPageContainer>
  );
};

export default AboutPage;

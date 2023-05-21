import React, { FC } from "react";
import { IAboutPage } from "../interfaces/IAboutPage";
import {
  AboutHeaderText,
  AboutPageContainer,
  GithubContainer,
  GithubIconContainer,
  GithubText,
  StackOverflowContainer,
} from "../styles/pages/AboutPage";
import {
  ActionIcon,
  Avatar,
  Badge,
  Blockquote,
  Box,
  Card,
  ColorScheme,
  Divider,
  Flex,
  Group,
  Text,
  Tooltip,
} from "@mantine/core";
import { HiOutlineDownload } from "react-icons/hi";
import { SiStackoverflow, SiGmail } from "react-icons/si";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineBranches,
  AiTwotoneStar,
} from "react-icons/ai";
import { useLocalStorage } from "@mantine/hooks";
import { RiMedalFill } from "react-icons/ri";
import { ImQuotesLeft } from "react-icons/im";
import { technologies } from "../data/competencies";

const AboutPage: FC<IAboutPage> = ({ id }) => {
  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  return (
    <AboutPageContainer id={id}>
      <Text size={32} weight={700}>
        About Me
      </Text>
      <Card radius="lg" withBorder>
        <Flex
          sx={{ marginBottom: 10 }}
          align="center"
          justify="space-between"
          direction="row"
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

          <Flex sx={{ marginLeft: 10 }} direction="row" align="center">
            <Group>
              <Tooltip label="Download resume" withArrow>
                <ActionIcon color="gray" radius="xl" variant="filled" size="lg">
                  <HiOutlineDownload />
                </ActionIcon>
              </Tooltip>

              <Tooltip label="Gmail" withArrow>
                <ActionIcon color="red" radius="xl" variant="filled" size="lg">
                  <SiGmail />
                </ActionIcon>
              </Tooltip>

              <Tooltip label="Linkedin" withArrow>
                <ActionIcon color="blue" radius="xl" variant="filled" size="lg">
                  <AiFillLinkedin />
                </ActionIcon>
              </Tooltip>

              <Tooltip label="Gmail" withArrow>
                <GithubContainer>
                  <ActionIcon
                    color="gray"
                    radius="xl"
                    variant="filled"
                    size="lg"
                  >
                    <AiFillGithub />
                  </ActionIcon>
                  <GithubIconContainer>
                    <AiOutlineBranches color="#fff" />
                  </GithubIconContainer>
                  <GithubText>1</GithubText>
                  <GithubIconContainer>
                    <AiTwotoneStar color="#fff" />
                  </GithubIconContainer>
                  <GithubText>100</GithubText>
                </GithubContainer>
              </Tooltip>

              <Tooltip label="Gmail" withArrow>
                <StackOverflowContainer>
                  <ActionIcon
                    color="orange"
                    radius="xl"
                    variant="filled"
                    size="lg"
                  >
                    <SiStackoverflow />
                  </ActionIcon>
                  <GithubIconContainer>
                    <RiMedalFill color="#fff" />
                  </GithubIconContainer>
                  <GithubText>1</GithubText>
                  <GithubIconContainer>
                    <RiMedalFill color="#fff" />
                  </GithubIconContainer>
                  <GithubText>1</GithubText>
                  <GithubIconContainer>
                    <RiMedalFill color="#fff" />
                  </GithubIconContainer>
                  <GithubText>100</GithubText>
                </StackOverflowContainer>
              </Tooltip>
            </Group>
          </Flex>
        </Flex>
        <Divider />
        <Blockquote icon={<ImQuotesLeft />} cite="">
          <Text size="md" weight={600}>
            I'm a Software Engineer who likes to see things being built one line
            of code at a time. Well organised and prefers to have incremental
            self-development based on the knowledge gained. <br />
            <br /> I have nearly 3 years of industry experience, and I am
            gaining more knowledge day-by-day, as I am a quick learner who likes
            to implement and make use of the knowledge gained, in order to
            create great things.
            <br />
            <br /> I'm currently working with javascript and typescript based
            frameworks such as React, React Native, Node JS, Express JS and much
            more.
            <br />
            <br /> My goal is to create high quality software products written
            with quality code and based on unique ideas, which will have a
            positive impact and make positive changes in the day-to-day lives of
            people. <br />
            <br />
            I'm also working towards my target of becoming a great software
            engineer among the best software engineers."
          </Text>
        </Blockquote>
        <Divider />
        <AboutHeaderText>Technical Competencies</AboutHeaderText>
        <Group>
          {technologies.map((technology) => {
            return (
              <Badge
                key={technology.id}
                color={technology.color}
                size="md"
                variant="filled"
              >
                {technology.name}
              </Badge>
            );
          })}
        </Group>
      </Card>
    </AboutPageContainer>
  );
};

export default AboutPage;

import {
  ActionIcon,
  Badge,
  Card,
  Container,
  Flex,
  Group,
  List,
  Text,
  ThemeIcon,
} from "@mantine/core";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { RiNumber5 } from "react-icons/ri";

const WorkItem = () => {
  return (
    <Card mt={20} shadow="xl" padding="sm" radius="lg">
      <Flex direction="row" align="center" justify="space-between">
        <Flex direction="row" align="center">
          <ThemeIcon color="red" radius="xl" size="md" sx={{ marginRight: 10 }}>
            <RiNumber5 />
          </ThemeIcon>
          <Flex direction="column">
            <Text size="md" weight={800}>
              Software Engineer
            </Text>
            <Text color="dimmed" size="xs" weight={800} tt="uppercase">
              Contribution: Full Stack Developer
            </Text>
            <Text color="indigo" weight={700} size="sm">
              Appspotr
            </Text>
            <Text size="xs" weight={700} mt={4}>
              2022-05 ~ Present
            </Text>
          </Flex>
        </Flex>
        <ActionIcon color="red" radius="xl" variant="light" size="md">
          <BiLinkExternal />
        </ActionIcon>
      </Flex>
      <Container>
        <List size="sm" mt={25} mb={14}>
          <List.Item>
            Implementing extensive Javascript/ Typescript based functionalities
            to design and develop mobile apps from a content managing system.
          </List.Item>
          <List.Item>
            Gaining experience in developing and maintaining custom user
            interface libraries and React JS library projects.
          </List.Item>
          <List.Item>
            Implementing utility functionalities for React JS applications;
            drag-and-drop functions, etc...
          </List.Item>
          <List.Item>
            Working with React based tools such as Redux Toolkit and Styled
            components, in order to maintain resusable and well refactored code.
          </List.Item>
          <List.Item>
            Implementing new functionalities and modifying existing
            functionalities of the platform with best-performace mindset.
          </List.Item>
        </List>
        <Group mt={25}>
          <Badge color="blue" size="md" variant="filled">
            Typescript
          </Badge>
          <Badge color="blue" size="md" variant="filled">
            React JS
          </Badge>
          <Badge color="blue" size="md" variant="filled">
            React Native
          </Badge>
          <Badge color="green" size="md" variant="filled">
            Jest
          </Badge>
        </Group>
      </Container>
    </Card>
  );
};

export default WorkItem;

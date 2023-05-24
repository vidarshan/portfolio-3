import React, { FC } from "react";
import { IWorkPage } from "../interfaces/IWorkPage";
import { WorkPageContainer } from "../styles/pages/WorkPage";
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
import { RiNumber5 } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { work } from "../data/work";

const WorkPage: FC<IWorkPage> = ({ id }) => {
  return (
    <WorkPageContainer id={id}>
      <Text size={32} weight={700}>
        Work Experience
      </Text>
      {(work || []).map((item, index) => {
        return (
          <Card key={index} mt={20} shadow="xl" padding="sm" radius="lg">
            <Flex direction="row" align="center" justify="space-between">
              <Flex direction="row" align="center">
                <ThemeIcon
                  color="red"
                  radius="xl"
                  size="md"
                  variant="light"
                  sx={{ marginRight: 10 }}
                >
                  {item.icon}
                </ThemeIcon>
                <Flex direction="column">
                  <Text size="md" weight={800}>
                    {item.title}
                  </Text>
                  <Text color="dimmed" size="xs" weight={800} tt="uppercase">
                    {item.contribution}
                  </Text>
                  <Text color="indigo" weight={700} size="sm">
                    {item.company}
                  </Text>
                  <Text size="xs" weight={700} mt={4}>
                    {item.date}
                  </Text>
                </Flex>
              </Flex>
              <ActionIcon color="red" radius="xl" variant="light" size="md">
                <BiLinkExternal />
              </ActionIcon>
            </Flex>
            <Container>
              <List size="sm" mt={25} mb={14}>
                {(item.details || []).map((detail) => {
                  return <List.Item>{detail}</List.Item>;
                })}
              </List>
              <Group mt={25}>
                {(item.competencies || []).map((competency) => {
                  return (
                    <Badge
                      key={competency.id}
                      color={competency.color}
                      size="md"
                      variant="light"
                    >
                      {competency.name}
                    </Badge>
                  );
                })}
              </Group>
            </Container>
          </Card>
        );
      })}
    </WorkPageContainer>
  );
};

export default WorkPage;

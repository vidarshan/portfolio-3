import React, { FC, useRef } from "react";
import { IWorkPage } from "../interfaces/IWorkPage";
import {
  WorkPageContainer,
  WorkMotionContainer,
} from "../styles/pages/WorkPage";
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
  Tooltip,
} from "@mantine/core";
import { BiLinkExternal } from "react-icons/bi";
import { work } from "../data/work";
import { container, item as framerItem } from "../animations";
import { motion, useInView } from "framer-motion";

const WorkPage: FC<IWorkPage> = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const onExternalOpen = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <WorkPageContainer id={id}>
      <Text ref={ref} size={32} weight={700}>
        Work Experience
      </Text>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <WorkMotionContainer>
          {(work || []).map((item, index) => {
            return (
              <motion.div variants={framerItem}>
                <Card
                  key={index}
                  mt={30}
                  padding="sm"
                  radius="lg"
                  shadow="sm"
                  withBorder
                >
                  <Flex direction="row" align="center" justify="space-between">
                    <Flex direction="row" align="center">
                      <ThemeIcon
                        color="cyan"
                        radius="md"
                        size="md"
                        variant="filled"
                        sx={{ marginRight: 10 }}
                      >
                        {item.icon}
                      </ThemeIcon>
                      <Flex direction="column">
                        <Text size="md" weight={800}>
                          {item.title}
                        </Text>
                        <Text
                          color="dimmed"
                          size="xs"
                          weight={800}
                          tt="uppercase"
                        >
                          {item.contribution}
                        </Text>
                        <Text color="cyan" weight={700} size="sm">
                          {item.company}
                        </Text>
                        <Text size="xs" weight={700} mt={4}>
                          {item.date}
                        </Text>
                      </Flex>
                    </Flex>
                    <Tooltip position="left" label="View Employer" withArrow>
                      <ActionIcon
                        color="cyan"
                        radius="sm"
                        variant="light"
                        size="sm"
                        disabled={item.link === "no-link"}
                        onClick={() => onExternalOpen(item.link)}
                      >
                        <BiLinkExternal />
                      </ActionIcon>
                    </Tooltip>
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
                            variant="filled"
                            radius="sm"
                          >
                            {competency.name}
                          </Badge>
                        );
                      })}
                    </Group>
                  </Container>
                </Card>
              </motion.div>
            );
          })}
        </WorkMotionContainer>
      </motion.div>
    </WorkPageContainer>
  );
};

export default WorkPage;

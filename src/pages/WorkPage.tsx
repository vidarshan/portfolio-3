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
} from "@mantine/core";
import { BiLinkExternal } from "react-icons/bi";
import { work } from "../data/work";
import { container, item as framerItem } from "../animations";
import { motion, useInView } from "framer-motion";

const WorkPage: FC<IWorkPage> = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <WorkPageContainer id={id}>
      <Text size={32} weight={700}>
        Work Experience
      </Text>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <WorkMotionContainer ref={ref}>
          {(work || []).map((item, index) => {
            return (
              <motion.div variants={framerItem}>
                <Card key={index} mt={30} padding="sm" radius="lg" shadow="md">
                  <Flex direction="row" align="center" justify="space-between">
                    <Flex direction="row" align="center">
                      <ThemeIcon
                        color="teal"
                        radius="xl"
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
                        <Text color="teal" weight={700} size="sm">
                          {item.company}
                        </Text>
                        <Text size="xs" weight={700} mt={4}>
                          {item.date}
                        </Text>
                      </Flex>
                    </Flex>
                    <ActionIcon color="red" radius="xl" variant="" size="sm">
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
                            variant="filled"
                            radius="xl"
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

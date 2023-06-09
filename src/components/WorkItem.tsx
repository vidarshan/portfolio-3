import { motion } from "framer-motion";
import { item } from "../animations";
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
import { FC } from "react";
import { IWorkItem } from "../interfaces/IWorkItem";

const WorkItem: FC<IWorkItem> = ({
  index,
  icon,
  title,
  contribution,
  company,
  date,
  link,
  details,
  competencies,
}) => {
  const onExternalOpen = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div variants={item}>
      <Card key={index} mt={30} padding="sm" radius="lg" shadow="sm" withBorder>
        <Flex direction="row" align="center" justify="space-between">
          <Flex direction="row" align="center">
            <ThemeIcon
              color="cyan"
              radius="md"
              size="md"
              variant="filled"
              sx={{ marginRight: 10 }}
            >
              {icon}
            </ThemeIcon>
            <Flex direction="column">
              <Text size="md" weight={800}>
                {title}
              </Text>
              <Text color="dimmed" size="xs" weight={800} tt="uppercase">
                {contribution}
              </Text>
              <Text color="cyan" weight={700} size="sm">
                {company}
              </Text>
              <Text size="xs" weight={700} mt={4}>
                {date}
              </Text>
            </Flex>
          </Flex>
          <Tooltip position="left" label="View Employer" withArrow>
            <ActionIcon
              color="cyan"
              radius="sm"
              variant="light"
              size="sm"
              disabled={link === "no-link"}
              onClick={() => onExternalOpen(link)}
            >
              <BiLinkExternal />
            </ActionIcon>
          </Tooltip>
        </Flex>
        <Container>
          <List size="sm" mt={25} mb={14}>
            {(details || []).map((detail) => {
              return <List.Item>{detail}</List.Item>;
            })}
          </List>
          <Group mt={25}>
            {(competencies || []).map((competency) => {
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
};

export default WorkItem;

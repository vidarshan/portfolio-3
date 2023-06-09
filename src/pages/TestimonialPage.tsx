import React, { FC, useRef } from "react";
import { ITestimonialage } from "../interfaces/ITestimonialPage";
import { TestimonialPageContainer } from "../styles/pages/TestimonialPage";
import {
  ActionIcon,
  Avatar,
  Blockquote,
  Card,
  Divider,
  Flex,
  Grid,
  Spoiler,
  Text,
  Tooltip,
} from "@mantine/core";
import { BsGlobe2 } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { ImQuotesLeft } from "react-icons/im";
import { container, item as framerItem } from "../animations";
import { motion, useInView } from "framer-motion";
import { testimonials } from "../data/data";

const TestimonialPage: FC<ITestimonialage> = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const onExternalOpen = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <TestimonialPageContainer id={id}>
      <Text mb={40} size={32} weight={700}>
        Testimonials
      </Text>
      <Grid ref={ref} gutter={40}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((item) => {
            return (
              <motion.div variants={framerItem}>
                <Grid.Col key={item.id} xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Card radius="lg" shadow="md" withBorder>
                    <Flex direction="row" justify="space-between">
                      <Flex>
                        <Avatar
                          variant="filled"
                          radius="md"
                          size="md"
                          color="teal"
                          src={item.avatar}
                        />
                        <Flex sx={{ marginLeft: 10 }} direction="column">
                          <Text size={16} weight={800}>
                            {item.name}
                          </Text>
                          <Text size={12} weight={600}>
                            {item.designation}
                          </Text>
                        </Flex>
                      </Flex>
                      <Tooltip
                        label={`View ${
                          item.type === "website" ? "Site" : "Profile"
                        }`}
                        withArrow
                      >
                        <ActionIcon
                          color={item.type === "website" ? "orange" : "blue"}
                          radius="md"
                          variant="light"
                          size="lg"
                          onClick={() => onExternalOpen(item.link)}
                        >
                          {item.type === "website" ? (
                            <BsGlobe2 />
                          ) : (
                            <SiLinkedin />
                          )}
                        </ActionIcon>
                      </Tooltip>
                    </Flex>
                    <Divider my="sm" />
                    <Blockquote
                      icon={<ImQuotesLeft color="#c2c2c2" />}
                      sx={{ fontSize: "14px", fontWeight: 700 }}
                    >
                      <Spoiler
                        maxHeight={130}
                        showLabel="Show more"
                        hideLabel="Hide"
                      >
                        {item.description}
                      </Spoiler>
                    </Blockquote>
                  </Card>
                </Grid.Col>
              </motion.div>
            );
          })}
        </motion.div>
      </Grid>
    </TestimonialPageContainer>
  );
};

export default TestimonialPage;

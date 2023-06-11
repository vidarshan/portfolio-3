import { Anchor, Box, Flex, Text } from "@mantine/core";
import React from "react";
import { currentRepoLink } from "../data/data";

const Footer = () => {
  return (
    <Flex mt={10} mb={10} direction="column" align="center">
      <Text size={14} weight={600}>
        Made with React JS |{" "}
        <Anchor href={currentRepoLink} target="_blank" size={14}>
          View Repository
        </Anchor>
      </Text>
    </Flex>
  );
};

export default Footer;

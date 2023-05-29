import React, { FC } from "react";
import { IHomePage } from "../interfaces/IHomePage";
import { HomePageContainer, ToggleText } from "../styles/pages/HomePage";
import { Box, Flex, Kbd, Text } from "@mantine/core";
import { useOs } from "@mantine/hooks";
import { TextContainer } from "../styles/pages/HomePage";
import { useMediaQuery } from "@mantine/hooks";
import { container, item } from "../animations";
import { motion } from "framer-motion";

const HomePage: FC<IHomePage> = ({ id }) => {
  const os = useOs();
  const largeScreen = useMediaQuery("(min-width: 60em)");
  console.log(os);
  return (
    <HomePageContainer id={id}>
      <TextContainer>
        <motion.div variants={container} initial="hidden" animate="visible">
          <Flex direction="column" justify="center">
            <motion.div variants={item}>
              <Text size={largeScreen ? 40 : 30} weight={700}>
                Hello
              </Text>
            </motion.div>
            <motion.div variants={item}>
              <Text size={largeScreen ? 40 : 30} weight={700}>
                I'm Vidarshan
              </Text>
            </motion.div>
            <motion.div variants={item}>
              <Text size={largeScreen ? 40 : 30} weight={700}>
                A Software Engineer
              </Text>
            </motion.div>
            {os === "android" || os === "ios" ? (
              <></>
            ) : (
              <Flex>
                <Kbd>{os === "macos" ? `⌘` : `Ctrl`} </Kbd> + <Kbd>J</Kbd>{" "}
                <ToggleText>to toggle theme</ToggleText>
              </Flex>
            )}
          </Flex>
        </motion.div>
      </TextContainer>
    </HomePageContainer>
  );
};

export default HomePage;

import React, { FC } from "react";
import { IHomePage } from "../interfaces/IHomePage";
import { HomePageContainer, ToggleText } from "../styles/pages/HomePage";
import { Box, Flex, Kbd, Text } from "@mantine/core";
import { useOs } from "@mantine/hooks";
import { TextContainer } from "../styles/pages/HomePage";
import { useMediaQuery } from "@mantine/hooks";

const HomePage: FC<IHomePage> = ({ id }) => {
  const os = useOs();
  const largeScreen = useMediaQuery("(min-width: 60em)");

  return (
    <HomePageContainer id={id}>
      <TextContainer>
        <Flex direction="column" justify="center">
          <Text size={largeScreen ? 40 : 30} weight={700}>
            Hello
          </Text>
          <Text size={largeScreen ? 40 : 30} weight={700}>
            I'm Vidarshan
          </Text>
          <Text size={largeScreen ? 40 : 30} weight={700}>
            A Software Engineer
          </Text>
          <Flex>
            <Kbd>{os === "macos" ? `⌘` : `Ctrl`} </Kbd> + <Kbd>J</Kbd>{" "}
            <ToggleText>to toggle theme</ToggleText>
          </Flex>
        </Flex>
      </TextContainer>
    </HomePageContainer>
  );
};

export default HomePage;

import React, { FC, useEffect, useRef } from "react";
import { IHomePage } from "../interfaces/IHomePage";
import {
  FontRow,
  HomePageContainer,
  HorizontalText,
  InnerContainer,
  LargerText,
  MediumText,
  SlidingContent,
  ToggleText,
} from "../styles/pages/HomePage";
import { Box, Flex, Kbd, Text } from "@mantine/core";
import { useOs } from "@mantine/hooks";
import { container, item } from "../animations";
import { motion } from "framer-motion";
import { AppDispatch, useAppSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { getStats } from "../store/slices/statsSlice";

const HomePage: FC<IHomePage> = ({ id }) => {
  const os = useOs();
  const ref = useRef(null);
  const dispatch = useDispatch<AppDispatch>();
  const { scrolled } = useAppSelector((state) => state.overScroll);

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  return (
    <HomePageContainer ref={ref} id={id}>
      <InnerContainer>
        <Box></Box>
        <Box>
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <FontRow>
                <HorizontalText>Hey there — </HorizontalText>
                <LargerText>I'm Vidarshan</LargerText>
              </FontRow>
            </motion.div>
            <motion.div variants={item}>
              <MediumText>A Software Engineer</MediumText>
            </motion.div>
            <motion.div variants={item}>
              {os === "android" || os === "ios" ? (
                <></>
              ) : (
                <Flex mt={16}>
                  <Kbd>{os === "macos" ? `⌘` : `Ctrl`} </Kbd> + <Kbd>J</Kbd>{" "}
                  <ToggleText>to toggle theme</ToggleText>
                </Flex>
              )}
            </motion.div>
          </motion.div>
        </Box>

        {!scrolled ? (
          <SlidingContent>
            <Text size={14} weight={600}>
              Scroll down to continue
            </Text>
          </SlidingContent>
        ) : (
          <Box></Box>
        )}
      </InnerContainer>
    </HomePageContainer>
  );
};

export default HomePage;

import { Link } from "react-scroll";
import {
  NavigationBarContainer,
  NavigationBarInnerContainer,
} from "../styles/components/NavigationBar";
import { NavigationItem } from "../styles/components/NaviagtionItem";
import {
  BiBriefcase,
  BiGrid,
  BiHome,
  BiMessage,
  BiTrophy,
  BiUserCircle,
} from "react-icons/bi";
import { useMediaQuery } from "@mantine/hooks";
import { FC } from "react";
import { INavigationBarContainer } from "../interfaces/INavigationItem";
import ThemeSwitch from "./ThemeSwitch";
import { motion } from "framer-motion";
import { Tooltip, useMantineColorScheme } from "@mantine/core";
import { container, item } from "../animations";

const NavigationBar: FC<INavigationBarContainer> = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <NavigationBarContainer color={colorScheme === "dark" ? "#1A1B1E" : "#fff"}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <NavigationBarInnerContainer>
          <Link activeClass="active" smooth spy to="home">
            <motion.div variants={item}>
              <Tooltip label="Home" withArrow>
                <NavigationItem
                  size="md"
                  radius="xl"
                  color="teal"
                  variant="filled"
                >
                  <BiHome size={18} />
                </NavigationItem>
              </Tooltip>
            </motion.div>
          </Link>
          <Link activeClass="active" smooth spy to="about">
            <motion.div variants={item}>
              <Tooltip label="Profile" withArrow>
                <NavigationItem
                  size="md"
                  radius="xl"
                  color="teal"
                  variant="filled"
                >
                  <BiUserCircle size={18} />
                </NavigationItem>
              </Tooltip>
            </motion.div>
          </Link>
          <Link activeClass="active" smooth spy to="work">
            <motion.div variants={item}>
              <Tooltip label="Work" withArrow>
                <NavigationItem
                  size="md"
                  radius="xl"
                  color="teal"
                  variant="filled"
                >
                  <BiBriefcase size={18} />
                </NavigationItem>
              </Tooltip>
            </motion.div>
          </Link>
          <Link activeClass="active" smooth spy to="project">
            <motion.div variants={item}>
              <Tooltip label="Projects" withArrow>
                <NavigationItem
                  size="md"
                  radius="xl"
                  color="teal"
                  variant="filled"
                >
                  <BiGrid size={18} />
                </NavigationItem>
              </Tooltip>
            </motion.div>
          </Link>
          <Link activeClass="active" smooth spy to="testimonial">
            <motion.div variants={item}>
              <Tooltip label="Testimonials" withArrow>
                <NavigationItem
                  size="md"
                  radius="xl"
                  color="teal"
                  variant="filled"
                >
                  <BiTrophy size={18} />
                </NavigationItem>
              </Tooltip>
            </motion.div>
          </Link>
          <Link activeClass="active" smooth spy to="contact">
            <motion.div variants={item}>
              <Tooltip label="Reach out" withArrow>
                <NavigationItem
                  size="md"
                  radius="xl"
                  color="teal"
                  variant="filled"
                >
                  <BiMessage size={18} />
                </NavigationItem>
              </Tooltip>
            </motion.div>
          </Link>
          <ThemeSwitch />
        </NavigationBarInnerContainer>
      </motion.div>
    </NavigationBarContainer>
  );
};

export default NavigationBar;

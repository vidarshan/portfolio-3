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
      <motion.div variants={container} initial="hidden" animate="visible">
        <NavigationBarInnerContainer>
          <Link activeClass="active" smooth spy to="home">
            <motion.div variants={item}>
              <Tooltip label="Home" withArrow>
                <NavigationItem
                  size="md"
                  variant="light"
                  radius="sm"
                  color="cyan"
                >
                  <BiHome size={16} />
                </NavigationItem>
              </Tooltip>
            </motion.div>
          </Link>
          <Link activeClass="active" smooth spy to="about">
            <motion.div variants={item}>
              <Tooltip label="Profile" withArrow>
                <NavigationItem
                  size="md"
                  variant="light"
                  radius="sm"
                  color="cyan"
                >
                  <BiUserCircle size={16} />
                </NavigationItem>
              </Tooltip>
            </motion.div>
          </Link>
          <Link activeClass="active" smooth spy to="work">
            <motion.div variants={item}>
              <Tooltip label="Work" withArrow>
                <NavigationItem
                  size="md"
                  variant="light"
                  radius="sm"
                  color="cyan"
                >
                  <BiBriefcase size={16} />
                </NavigationItem>
              </Tooltip>
            </motion.div>
          </Link>
          <Link activeClass="active" smooth spy to="project">
            <motion.div variants={item}>
              <Tooltip label="Projects" withArrow>
                <NavigationItem
                  size="md"
                  variant="light"
                  radius="sm"
                  color="cyan"
                >
                  <BiGrid size={16} />
                </NavigationItem>
              </Tooltip>
            </motion.div>
          </Link>
          <Link activeClass="active" smooth spy to="testimonial">
            <motion.div variants={item}>
              <Tooltip label="Testimonials" withArrow>
                <NavigationItem
                  size="md"
                  variant="light"
                  radius="sm"
                  color="cyan"
                >
                  <BiTrophy size={16} />
                </NavigationItem>
              </Tooltip>
            </motion.div>
          </Link>
          <Link activeClass="active" smooth spy to="contact">
            <motion.div variants={item}>
              <Tooltip label="Reach out" withArrow>
                <NavigationItem
                  size="md"
                  variant="light"
                  radius="sm"
                  color="cyan"
                >
                  <BiMessage size={16} />
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

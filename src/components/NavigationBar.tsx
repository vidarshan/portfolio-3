import { Link } from "react-scroll";
import {
  NavigationBarContainer,
  NavigationBarInnerContainer,
} from "../styles/components/NavigationBar";
import { NavigationItem } from "../styles/components/NaviagtionItem";
import {
  IoBriefcase,
  IoChatbox,
  IoGrid,
  IoHandRight,
  IoHome,
  IoTrophy,
} from "react-icons/io5";
import {
  BiBriefcase,
  BiGrid,
  BiHome,
  BiMessage,
  BiMoon,
  BiTrophy,
  BiUserCircle,
} from "react-icons/bi";
import { useMediaQuery } from "@mantine/hooks";
import { FC } from "react";
import { INavigationBarContainer } from "../interfaces/INavigationItem";
import ThemeSwitch from "./ThemeSwitch";

const NavigationBar: FC<INavigationBarContainer> = () => {
  const largeScreen = useMediaQuery("(min-width: 60em)");
  console.log("🚀 ~ file: NavigationBar.tsx:27 ~ largeScreen:", largeScreen);

  return (
    <>
      {largeScreen ? (
        <NavigationBarContainer>
          <NavigationBarInnerContainer>
            <Link activeClass="active" smooth spy to="home">
              <NavigationItem
                size="md"
                radius="sm"
                color="dark"
                variant="filled"
              >
                <BiHome size={18} />
              </NavigationItem>
            </Link>
            <Link activeClass="active" smooth spy to="about">
              <NavigationItem
                size="md"
                radius="sm"
                color="dark"
                variant="filled"
              >
                <BiUserCircle size={18} />
              </NavigationItem>
            </Link>
            <Link activeClass="active" smooth spy to="work">
              <NavigationItem
                size="md"
                radius="sm"
                color="dark"
                variant="filled"
              >
                <BiBriefcase size={18} />
              </NavigationItem>
            </Link>
            <Link activeClass="active" smooth spy to="project">
              <NavigationItem
                size="md"
                radius="sm"
                color="dark"
                variant="filled"
              >
                <BiGrid size={18} />
              </NavigationItem>
            </Link>
            <Link activeClass="active" smooth spy to="testimonial">
              <NavigationItem
                size="md"
                radius="sm"
                color="dark"
                variant="filled"
              >
                <BiTrophy size={18} />
              </NavigationItem>
            </Link>
            <Link activeClass="active" smooth spy to="contact">
              <NavigationItem
                size="md"
                radius="sm"
                color="dark"
                variant="filled"
              >
                <BiMessage size={18} />
              </NavigationItem>
            </Link>
            <ThemeSwitch />
          </NavigationBarInnerContainer>
        </NavigationBarContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavigationBar;

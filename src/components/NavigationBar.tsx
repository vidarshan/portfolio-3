import { ActionIcon } from "@mantine/core";
import {
  BiBriefcase,
  BiCategory,
  BiHome,
  BiMessage,
  BiSmile,
  BiTrophy,
} from "react-icons/bi";
import { Link } from "react-scroll";
import { NavigationBarContainer } from "../styles/components/NavigationBar";

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <Link activeClass="active" smooth spy to="home">
        <ActionIcon>
          <BiHome />
        </ActionIcon>
      </Link>
      <Link activeClass="active" smooth spy to="about">
        <ActionIcon>
          <BiSmile />
        </ActionIcon>
      </Link>
      <Link activeClass="active" smooth spy to="work">
        <ActionIcon>
          <BiBriefcase />
        </ActionIcon>
      </Link>
      <Link activeClass="active" smooth spy to="project">
        <ActionIcon>
          <BiCategory />
        </ActionIcon>
      </Link>
      <Link activeClass="active" smooth spy to="testimonial">
        <ActionIcon>
          <BiTrophy />
        </ActionIcon>
      </Link>
      <Link activeClass="active" smooth spy to="contact">
        <ActionIcon>
          <BiMessage />
        </ActionIcon>
      </Link>
    </NavigationBarContainer>
  );
};

export default NavigationBar;

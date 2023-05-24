import { Link } from "react-scroll";
import { NavigationBarContainer } from "../styles/components/NavigationBar";
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
  BiTrophy,
  BiUserCircle,
} from "react-icons/bi";

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <Link activeClass="active" smooth spy to="home">
        <NavigationItem size="lg" radius="xl" color="yellow" variant="filled">
          <BiHome size={18} color="black" />
        </NavigationItem>
      </Link>
      <Link activeClass="active" smooth spy to="about">
        <NavigationItem size="lg" radius="xl" color="yellow" variant="filled">
          <BiUserCircle size={18} color="black" />
        </NavigationItem>
      </Link>
      <Link activeClass="active" smooth spy to="work">
        <NavigationItem size="lg" radius="xl" color="yellow" variant="filled">
          <BiBriefcase size={18} color="black" />
        </NavigationItem>
      </Link>
      <Link activeClass="active" smooth spy to="project">
        <NavigationItem size="lg" radius="xl" color="yellow" variant="filled">
          <BiGrid size={18} color="black" />
        </NavigationItem>
      </Link>
      <Link activeClass="active" smooth spy to="testimonial">
        <NavigationItem size="lg" radius="xl" color="yellow" variant="filled">
          <BiTrophy size={18} color="black" />
        </NavigationItem>
      </Link>
      <Link activeClass="active" smooth spy to="contact">
        <NavigationItem size="lg" radius="xl" color="yellow" variant="filled">
          <BiMessage size={18} color="black" />
        </NavigationItem>
      </Link>
    </NavigationBarContainer>
  );
};

export default NavigationBar;

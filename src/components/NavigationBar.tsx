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

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <Link activeClass="active" smooth spy to="home">
        <NavigationItem size="lg" radius="xl" color="red" variant="filled">
          <IoHome color="white" size={16} />
        </NavigationItem>
      </Link>
      <Link activeClass="active" smooth spy to="about">
        <NavigationItem size="lg" radius="xl" color="red" variant="filled">
          <IoHandRight color="white" size={16} />
        </NavigationItem>
      </Link>
      <Link activeClass="active" smooth spy to="work">
        <NavigationItem size="lg" radius="xl" color="red" variant="filled">
          <IoBriefcase color="white" size={16} />
        </NavigationItem>
      </Link>
      <Link activeClass="active" smooth spy to="project">
        <NavigationItem size="lg" radius="xl" color="red" variant="filled">
          <IoGrid color="white" size={16} />
        </NavigationItem>
      </Link>
      <Link activeClass="active" smooth spy to="testimonial">
        <NavigationItem size="lg" radius="xl" color="red" variant="filled">
          <IoTrophy color="white" size={16} />
        </NavigationItem>
      </Link>
      <Link activeClass="active" smooth spy to="contact">
        <NavigationItem size="lg" radius="xl" color="red" variant="filled">
          <IoChatbox color="white" size={16} />
        </NavigationItem>
      </Link>
    </NavigationBarContainer>
  );
};

export default NavigationBar;

import { ActionIcon, ColorScheme, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { ThemeSwitchContainer } from "../styles/components/ThemeSwitch";

const ThemeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ThemeSwitchContainer>
      <ActionIcon
        color="yellow"
        variant="filled"
        radius="xl"
        onClick={() => toggleColorScheme()}
      >
        <IoMoon color="black" />
      </ActionIcon>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;

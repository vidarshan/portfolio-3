import { ActionIcon, ColorScheme, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeSwitchContainer } from "../styles/components/ThemeSwitch";

const ThemeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  console.log(
    "🚀 ~ file: ThemeSwitch.tsx:8 ~ ThemeSwitch ~ colorScheme:",
    colorScheme
  );

  return (
    <ThemeSwitchContainer>
      <ActionIcon
        color={colorScheme === "dark" ? "yellow" : "yellow"}
        variant="filled"
        radius="xl"
        onClick={() => toggleColorScheme()}
      >
        {colorScheme === "dark" ? (
          <BiMoon color="black" />
        ) : (
          <BiSun color="black" />
        )}
      </ActionIcon>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;

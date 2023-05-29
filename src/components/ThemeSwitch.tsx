import { ActionIcon, ColorScheme, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";

const ThemeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  console.log(
    "🚀 ~ file: ThemeSwitch.tsx:8 ~ ThemeSwitch ~ colorScheme:",
    colorScheme
  );

  return (
    <ActionIcon
      size="md"
      radius="xl"
      color="yellow"
      variant="filled"
      onClick={() => toggleColorScheme()}
    >
      {colorScheme === "dark" ? (
        <BiMoon color="#000" />
      ) : (
        <BiSun color="#000" />
      )}
    </ActionIcon>
  );
};

export default ThemeSwitch;

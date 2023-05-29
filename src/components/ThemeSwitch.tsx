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
      radius="sm"
      color="yellow"
      variant="filled"
      onClick={() => toggleColorScheme()}
    >
      {colorScheme === "dark" ? <BiMoon /> : <BiSun />}
    </ActionIcon>
  );
};

export default ThemeSwitch;
